import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from "prop-types"
import { AtList, AtListItem, AtRate } from "taro-ui"
import styles from "./list.module.scss"
class MovieList extends Component {

    static PropTypes = {
        categoryTitle:PropTypes.string,
        movieList: PropTypes.array
    }
    constructor(props) {
        super(props)
    }

    onScroll = () => {

    }

    showMore=(title)=>{
      Taro.navigateTo({url:`/pages/moreMovie/index?title=${title}`})
    }

    render() {
        return (
            <View
                className={styles.movie_content}
            >
                <AtList hasBorder={false}>
                    <AtListItem 
                        isSwitch
                        title={this.props.categoryTitle}
                        hasBorder={false}
                        extraText='查看更多' arrow='right'
                        onClick={()=>{this.showMore(this.props.categoryTitle)}}
                    />
                </AtList>
                <ScrollView
                    className={styles.movie_scroll}
                    scrollX
                    scrollWithAnimation
                    scrollLeft={0}
                    onScroll={this.onScroll}
                >
                    {
                        this.props.movieList ? this.props.movieList.map(movie => {
                            return (
                                <View
                                    className={styles.movie_item}
                                    key={movie.id}
                                >
                                    <View className={styles.movie_item_body}>
                                        <image src={movie.images.medium}></image>
                                        {movie.rating.average ? <View className={styles.movie_item_body_rate}>
                                            <AtRate
                                                size='10'
                                                value={movie.rating.average / 2}
                                            />
                                            <Text>{movie.rating.average.toFixed(1)}</Text>
                                        </View>
                                            : <View className={styles.movie_item_body_rate}>
                                                <Text>暂无评分</Text>
                                            </View>}
                                    </View>
                                </View>
                            )
                        }) : ""
                    }
                </ScrollView>
            </View>
        )
    }
}

export default MovieList
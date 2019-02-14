import React,{Component} from 'react'
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { View } from 'native-base';
import { Thumbnail } from 'native-base';
class PhotoDetail extends Component{
    render(){
        const {photo,caption,uid} = this.props
        return(
            <View>
                <Card>
                <CardSection>
                <View style={thumbnailContainerStyle}>
                               <Thumbnail source={{ uri: 'https://'+photo }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{uri: 'https://'+photo}}>
                    </Image>
                </CardSection>
                <CardSection>
                <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                        <Text>{caption}</Text>
                    </View>
            </CardSection>
            <CardSection>
                <View style={{flex:1,height:null}}>
                <ScrollView>
                <Text>Comment</Text>
                <Text>Comment</Text>
                </ScrollView>
                </View>
            </CardSection>
                </Card>
            </View>
        )
    }
}
const styles = { 
    headerContentStyle: {
        justifyContent: 'space-around'
        },
    headerTextStyle: {
        fontSize: 18
        },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: { 
        flex: 1,
        width: null,
        height: 300,
        resizeMode: 'contain'
    }
}
const mapStateToProps = (state) => {
    const { photo, caption ,email,uid } = state.photoForm;

    return { photo, caption ,email,uid };
};

export default connect( mapStateToProps, {})(PhotoDetail);
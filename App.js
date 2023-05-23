import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {ImageSet} from './components/Images';
import WebView from 'react-native-webview';

const App = () => {
  const webViewRef = useRef(null);

  const handleButtonPress = () => {
    webViewRef.current.injectJavaScript(`
    showAlert();
  `);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView style={{flex: 1}}>
        <Post />
        <View>
          {/*webview */}

          <WebView
            ref={webViewRef}
            style={{height: 200, width: '100%'}}
            source={{html: htmlContent}}
            // Listen to WebView messages
            onMessage={event => {
              // Handle messages received from WebView
              //alert('msg');
              const message = event.nativeEvent.data;
              console.log(message);
              if (message === 'showAlert') {
                // Show the alert in your React Native component
                alert('Alert from WebView!');
              }
            }}
          />

          {/*post Actions*/}

          <View style={styles.headerContainer}>
            <View style={styles.profileName}>
              <Image
                source={ImageSet.heart}
                style={{height: 30, width: 30}}
                resizeMode={'contain'}
              />
              <Text style={{color: '#AFB9CA'}}> 5 </Text>
              <Image
                source={ImageSet.comment}
                style={{height: 30, width: 30}}
                resizeMode={'contain'}
              />
              <Text style={{color: '#AFB9CA'}}> 5 </Text>
              <Image
                source={ImageSet.bookmark}
                style={{height: 30, width: 30}}
                resizeMode={'contain'}
              />
              <Image
                source={ImageSet.dots}
                style={{height: 30, width: 30}}
                resizeMode={'contain'}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, {height: 40, minWidth: 100}]}
              onPress={() => {
                const jsCode = `alert('Alert in WebView!');`;
                webViewRef.current.injectJavaScript(jsCode);
              }}>
              <Text style={styles.whiteText}>WV Alert</Text>
            </TouchableOpacity>
          </View>

          {/*bottom*/}
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.profileName}>
                <Image
                  source={ImageSet.dp1}
                  style={{height: 40, width: 40}}
                  resizeMode={'contain'}
                />
                <View>
                  <View style={styles.profileName}>
                    <Text style={styles.title}> 안녕 나 응애 </Text>
                    <Image
                      source={ImageSet.verified}
                      style={{height: 15, width: 15}}
                      resizeMode={'contain'}
                    />
                    <Text style={{color: '#dcdcdc', fontSize: 12}}> 1일전</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingLeft: 60, paddingRight: 20}}>
              <Text style={{fontSize: 12}}>
                어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
                아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
                제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
                리뷰 올라온다고 하니 꼭 봐주세용~!
              </Text>
              <View style={styles.profileName}>
                <Image
                  source={ImageSet.heart}
                  style={{height: 20, width: 20}}
                  resizeMode={'contain'}
                />
                <Text style={{color: '#AFB9CA'}}> 5 </Text>
                <Image
                  source={ImageSet.comment}
                  style={{height: 20, width: 20}}
                  resizeMode={'contain'}
                />
                <Text style={{color: '#AFB9CA'}}> 5 </Text>
              </View>
              <View
                style={[
                  styles.headerContainer,
                  {
                    minHeight: 30,
                    paddingVertical: 5,
                  },
                ]}>
                <View style={styles.profileName}>
                  <Image
                    source={ImageSet.dp1}
                    style={{height: 30, width: 30}}
                    resizeMode={'contain'}
                  />
                  <View>
                    <View style={styles.profileName}>
                      <Text style={styles.subtitle}> 안녕 나 응애 </Text>
                      <Image
                        source={ImageSet.verified}
                        style={{height: 10, width: 10}}
                        resizeMode={'contain'}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{paddingLeft: 60, paddingRight: 20}}>
                <Text style={{fontSize: 12}}>
                  오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                </Text>
                <View style={styles.profileName}>
                  <Image
                    source={ImageSet.heart}
                    style={{height: 20, width: 20}}
                    resizeMode={'contain'}
                  />
                  <Text style={{color: '#AFB9CA'}}> 5 </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <title>WebView Content</title>
    <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #dcdcdc
          }

          button {
            background-color: #01B99F;
            border-radius: 50px;
            padding: 24px 35px;
            font-size: 45px;
            color: #ffffff
          }
        </style>
  </head>

  <body >
    <button onclick="showAlert()">Native Alert</button>

    <script>
      function showAlert() {
        // Send a message to the React Native component
        window.ReactNativeWebView.postMessage('showAlert');
       
      }
    </script>
  </body>
</html>`;

const Post = () => {
  return (
    <View style={{padding: 20}}>
      <View style={[styles.headerContainer, {paddingHorizontal: 0}]}>
        <View style={styles.profileName}>
          <Image
            source={ImageSet.dp1}
            style={{height: 40, width: 40}}
            resizeMode={'contain'}
          />
          <View>
            <View style={styles.profileName}>
              <Text style={styles.title}> 안녕 나 응애 </Text>
              <Image
                source={ImageSet.verified}
                style={{height: 15, width: 15}}
                resizeMode={'contain'}
              />
              <Text style={{color: '#dcdcdc', fontSize: 12}}> 1일전</Text>
            </View>
            <Text style={{color: '#dcdcdc'}}> 165cm - 53Kg</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.whiteText}>팔로우</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 5}}>
        오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
      </Text>
      <Text>
        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
        어떤 상품이 제일 괜찮았어? 후기 올라오는거 보면 로우라이즈? 그게 제일
        반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? 올해 로우라이즈가
        트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지
        너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기
        좀 공유해주라~~!
      </Text>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={ImageSet.arrow}
        style={styles.imageIcon}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>자유톡</Text>
      <Image source={ImageSet.bell} style={styles.imageIcon} />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  headerContainer: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageIcon: {
    height: 25,
    width: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    minWidth: 60,
    height: 30,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#01B99F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  bottomSection: {
    paddingHorizontal: 20,
  },
});

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { SECRET_KEY, ACCESS_KEY, JWT_USER, JWT_PASS } from '@env'
import AuthContext from './Context/Data';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen'
import NotificationScreen from './screens/NotificationScreen'
import SearchScreen from './screens/SearchScreen'
import FeedScreen from './screens/FeedScreen'
import VideoFullScreen from './screens/VideoFullScreen'
import IntroScreen from './screens/IntroScreen'
import IntroSlider from './screens/IntroSlider';
import OTPScreen from './screens/OTPScreen';
import { TransitionPresets } from '@react-navigation/stack';
import PostScreen from './screens/PostScreen'
import ServiceScreen from './screens/ServiceScreen'
import ProfileScreen from './screens/ProfileScreen'
import ImagePreview from './screens/ImagePreview'
import VideoPreview from './screens/VideoPreview'
import Camera from './components/Camera'
import ChildScreen from './screens/ChildScreen'
import Browser from './screens/Browser'
import Gallery from './components/Gallery'
import SinglePostScreen from './screens/SinglePost'
import Searching from './screens/Searching'
import AddText from './screens/AddText'
import Unverified from './screens/Unverified'
import ChildSuccess from './screens/ChildSuccess'
import FileScreen from './screens/FileScreen'
import Settings from './screens/Settings'
import Upload from './components/Post';
import Verified from './screens/Verified'
import PostScreenNavig from './screens/PostScreenNavig'
import PostFolder from './components/PostFolder'
import Comments from './screens/CommentScreen'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import IndProfile from './screens/IndProfile';
import Includes from './Modules/Includes';
import GalleryScreen from './screens/GalleryScreen';
import VideoScreen from './screens/VideoScreen';
import KidUser from './screens/KidUser';
import KidsAge from './screens/KidsAge';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import analytics from '@segment/analytics-react-native'
import codePush from "react-native-code-push";
import { connect } from 'getstream';
import { NotifierRoot, Easing, Notifier } from 'react-native-notifier';
import firebase from '@react-native-firebase/app';
import OneSignal from 'react-native-onesignal';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './Store/store';
const CleverTap = require('clevertap-react-native');
const Stack = createStackNavigator();
const BottomNav = createBottomTabNavigator();
const DrawNav = createDrawerNavigator();
import RectMoE from 'react-native-moengage'

console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

const App = (props) => {
  const notifierRef = useRef(null)
  const [loading, setloading] = useState(true)
  const [status, setstatus] = useState('')
  const [profile, setprofile] = useState({})
  const [children, setchildren] = useState({})
  const [joined, setjoined] = useState({})
  const [camerastatus, setCameraStatus] = useState(null);
  const [notifications, setnotifications] = useState({})
  const [newnoti, setnewnoti] = useState([])
  var data = { children: children, status: status, profile: profile, joined: joined, notifications: notifications, newnoti: newnoti, camerastatus: camerastatus }
  const onReceived = (notification) => {
    console.log("Notification received: ", notification);
  }
  const onOpened = (openResult) => {
    containerRef.current?.navigate(openResult.notification.payload.additionalData.screen)
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  const onIds = (device) => {
    // console.log('Device info: ', device);
  }
  useEffect(() => {
    //Remove this method to stop OneSignal Debugging 
    OneSignal.setLogLevel(6, 0);

    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("45264e11-664b-45ca-9181-9559110376f9", { kOSSettingsKeyAutoPrompt: false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption: 2 });
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    []
  })
  useEffect(() => {
    const hello = () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    }
    return (
      hello
    )
  })
  const containerRef = React.useRef();


  function Bottom(props) {
    return (
      <BottomNav.Navigator
        tabBarOptions={{
          activeTintColor: 'purple', adaptive: true, allowFontScaling: true, style: {
            height: 65, borderWidth: 0.5,
            borderBottomWidth: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderColor: 'transparent',
            elevation: 20,
          }
        }}
      >
        <BottomNav.Screen initialParams={data} name="Feed" component={FeedScreen} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon name="home" style={{ color: "#327feb", fontSize: 24 }} type="Feather" /><Text style={{ fontFamily: 'NunitoSans-Bold', fontSize: 13, color: "#327FEB", }}>Home</Text></View> : <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: "grey", fontSize: 24 }} type="Feather" name="home" /><Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: 13, color: "grey", }}>Home</Text></View> }} />
        <BottomNav.Screen initialParams={data} name="Search" component={SearchScreen} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: '#327FEB', fontSize: 24, marginRight: 2 }} type="Feather" name="search" /><Text style={{ fontFamily: 'NunitoSans-Bold', fontSize: 13, color: "#327FEB", }}>Search</Text></View> : <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: 'grey', fontSize: 24, marginRight: 2 }} type="Feather" name="search" /><Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: 13, color: "grey", }}>Search</Text></View> }} />
        <BottomNav.Screen initialParams={data} name="Post" style={{ backgroundColor: 'transparent', zIndex: 10000, position: 'absolute', marginBottom: 30 }} component={PostScreenNavig} options={{ tabBarLabel: '', tabBarButton: props => <TouchableOpacity {...props} hitSlop={{ top: 80, bottom: 20 }} style={{ bottom: 20, elevation: 10, backgroundColor: '#327FEB', borderRadius: 10000, width: 65, height: 65, }} ><Icon name={'camera'} type="Entypo" style={{ fontSize: 25, padding: 20.5, color: 'white', }} /></TouchableOpacity> }} />
        <BottomNav.Screen initialParams={data} name="Files" component={FileScreen} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: '#327FEB', fontSize: 24 }} type="Feather" name="film" /><Text style={{ fontFamily: 'NunitoSans-Bold', fontSize: 13, color: "#327FEB", }}>Collections</Text></View> : <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: 'grey', fontSize: 24 }} type="Feather" name="film" /><Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: 13, color: "grey", }}>Collections</Text></View> }} />
        <BottomNav.Screen initialParams={data} name="Profile" component={ProfileScreen} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: '#327FEB', fontSize: 24 }} type="Feather" name="user" /><Text style={{ fontFamily: 'NunitoSans-Bold', fontSize: 13, color: "#327FEB", }}>Profile</Text></View> : <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}><Icon style={{ color: 'grey', fontSize: 24 }} type="Feather" name="user" /><Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: 13, color: "grey", }}>Profile</Text></View> }} />
      </BottomNav.Navigator>
    )
  }


  // useEffect(() => {
  //   CleverTap.recordEvent('App Opened');

  //   const send = async () => {
  //     var x = await AsyncStorage.getItem('status');
  //     if (x) {
  //       if (x == '2') {
  //         containerRef.current?.navigate('Child')
  //         setinit('Child')
  //       }
  //       if (x == '-1') {
  //         containerRef.current?.navigate('Home')
  //         setinit('Home')
  //       }
  //       if (x == '3') {
  //         containerRef.current?.navigate('Home')
  //         setinit('Home')
  //       }
  //     }
  //   }
  //   send();
  // }, [])
  useEffect(() => {
    const data = async () => {
      var stat = await AsyncStorage.getItem('status');
      var profile1 = await AsyncStorage.getItem('profile');
      var notifications1 = await AsyncStorage.getItem('notifications');
      if (profile1) {
        profile1 = JSON.parse(profile1)
      }
      var children1 = await AsyncStorage.getItem('children');
      if (children1) {
        children1 = JSON.parse(children1)
      }
      if (notifications1) {
        notifications1 = JSON.parse(notifications1)
      }

      axios.get('https://api.genio.app/get-out/loginheaders/')
        .then(loginheaders => {
          loginheaders = loginheaders.data;
          AsyncStorage.setItem('loginheaders', JSON.stringify(loginheaders));
        })
      setprofile(profile1)
      setchildren(children1)
      setnotifications(notifications1)
      setstatus(stat)
      setloading(false)
    }
    data()
  }, [])
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
    });

    return unsubscribe;
  }, []);
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    alert('Message handled in the background!', remoteMessage.data);
  });



  useEffect(() => {

    const segmentInitialize = async () => {
      await analytics.setup('A43k9qNF1Cof0lLE4DeTil5iMfSxCiap', {
        // Record screen views automatically!
        recordScreenViews: true,
        // Record certain application events automatically!
        trackAppLifecycleEvents: true
      })
    }
    segmentInitialize();
    dynamicLinks()
      .getInitialLink()
      .then(async (link) => {
        var pro = await AsyncStorage.getItem('profile')
        if (pro) {
          console.log("dlink: ", link)
          pro = JSON.parse(pro)
          if (link.url.includes(pro.uuid)) {
            containerRef.current?.navigate('Verified')
            setinit('Verified')
          }
        }
        if (link.url.includes('verify')) {
          containerRef.current?.navigate('Unverified')
        }
        if (link.url.includes('post')) {
          var child = await AsyncStorage.getItem('children')
          if (child) {
            var children = JSON.parse(child)
            child = JSON.parse(child)
            var status = await AsyncStorage.getItem('status');
            const client = connect('9ecz2uw6ezt9', child['0']['data']['gsToken'], '96078');
            var user = client.feed('timeline', child['0']['id'] + 'id', child['0']['data']['gsToken']);
            var id = link.url
            const addreaction = (kind, activity, data, options) => {
              client.reactions.add(
                kind,
                activity,
                data,
                options,
              )
            }
            id = id.replace('https://link.genio.app/post?id=', '')
            user.get({ id_gte: id, limit: 1, enrich: true, reactions: { own: true, counts: true, recent: true }, })
              .then((data) => {
                console.log(data)
                containerRef.current?.navigate('SinglePost', {
                  id: children['0']['id'], name: children['0']['data']['name'], image: children['0']['data']['image'], activity: {
                    activity: data['results'][0], onAddReaction: addreaction
                  }, token: children['0']['data']['gsToken']
                })
              })
              .catch((data) => {
                console.log(data)
                containerRef.current?.navigate('Home')
              })
          }
          else {
            const client = connect('9ecz2uw6ezt9', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM', '96078');
            var user = client.feed('timeline', 'admin', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM');
            var id = link.url
            const addreaction = (kind, activity, data, options) => {
              client.reactions.add(
                kind,
                activity,
                data,
                options,
              )
            }
            id = id.replace('https://link.genio.app/post?id=', '')
            user.get({ id_gte: id, limit: 1, enrich: true, reactions: { own: true, counts: true, recent: true }, })
              .then((data) => {
                console.log(data)
                containerRef.current?.navigate('SinglePost', {
                  id: 'admin', name: 'npne', image: 'none', activity: {
                    activity: data['results'][0], onAddReaction: addreaction
                  }, token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM'
                })
              })
              .catch((data) => {
                console.log(data)
                containerRef.current?.navigate('Home')
              })
          }
        }
        if (link.url.includes('quiz')) {
          containerRef.current?.navigate('Post')
        }
        if (link.url.includes('news')) {
          containerRef.current?.navigate('Post')
        }
      })
      .catch(() => {
        // console.log('do nothing')
      }
      )
  }, []);
  // setInitialNavigationState(await getInitialState());
  const handleDynamicLink = async (link) => {
    console.log(link)
    var pro = await AsyncStorage.getItem('profile')
    if (pro) {
      pro = JSON.parse(pro)
      if (link.url.includes(pro.uuid)) {
        containerRef.current?.navigate('Verified')
        setinit('Verified')
      }
    }
    if (link.url.includes('verify')) {
      containerRef.current?.navigate('Unverified')
    }
    if (link.url.includes('post')) {
      var child = await AsyncStorage.getItem('children')
      if (child) {
        try {
          var children = JSON.parse(child)
          child = JSON.parse(child)
          var status = await AsyncStorage.getItem('status');
          const client = connect('9ecz2uw6ezt9', child['0']['data']['gsToken'], '96078');
          var user = client.feed('timeline', child['0']['id'] + 'id', child['0']['data']['gsToken']);
          var id = link.url
          const addreaction = (kind, activity, data, options) => {
            client.reactions.add(
              kind,
              activity,
              data,
              options,
            )
          }
          id = id.replace('https://link.genio.app/post?id=', '')
          user.get({ id_gte: id, limit: 1, enrich: true, reactions: { own: true, counts: true, recent: true }, })
            .then((data) => {
              console.log(data)
              containerRef.current?.navigate('SinglePost', {
                id: children['0']['id'], name: children['0']['data']['name'], image: children['0']['data']['image'], activity: {
                  activity: data['results'][0], onAddReaction: addreaction
                }, token: children['0']['data']['gsToken']
              })
            })
            .catch((data) => {
              console.log(data)
              containerRef.current?.navigate('Home')
            })
        }
        catch (error) {
          console.log(error)
        }
      }
      else {
        const client = connect('9ecz2uw6ezt9', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM', '96078');
        var user = client.feed('timeline', 'admin', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM');
        var id = link.url
        const addreaction = (kind, activity, data, options) => {
          client.reactions.add(
            kind,
            activity,
            data,
            options,
          )
        }
        id = id.replace('https://link.genio.app/post?id=', '')
        user.get({ id_gte: id, limit: 1, enrich: true, reactions: { own: true, counts: true, recent: true }, })
          .then((data) => {
            console.log(data)
            containerRef.current?.navigate('SinglePost', {
              id: 'admin', name: 'npne', image: 'none', activity: {
                activity: data['results'][0], onAddReaction: addreaction
              }, token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.abIBuk2wSzfz5xFw_9q0YsAN-up4Aoq_ovDzMwx10HM'
            })
          })
          .catch((data) => {
            console.log(data)
            containerRef.current?.navigate('Home')
          })
      }
    }
    if (link.url.includes('quiz')) {
      containerRef.current?.navigate('Home', { goTo: 'quiz' })
    }
    if (link.url.includes('news')) {
      containerRef.current?.navigate('Home', { 'goTo': 'news' })
    }
  };
  StatusBar.setBackgroundColor('#1A71EB')
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const sidewaysConfig = (route, navigation) => ({
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    headerStatusBarHeight:
      navigation
        .dangerouslyGetState()
        .routes.findIndex((r) => r.key === route.key) > 0
        ? 0
        : undefined,
    ...TransitionPresets.SlideFromRightIOS,
  })
  useEffect(() => {
    const check = async () => {
      var st = await AsyncStorage.getItem('status')
      if (st == '3') {
        var pro = await AsyncStorage.getItem('profile')
        var ch = await AsyncStorage.getItem('children');
        var cmr = await AsyncStorage.getItem('camerastatus');
        if (cmr) {
          setCameraStatus(cmr);
        }
        if (ch) {
          setchildren(JSON.parse(ch));
        }
        else {

          if (pro !== null) {
            pro = JSON.parse(pro)
            var data = JSON.stringify({ "username": JWT_USER, "password": JWT_PASS });
            var config = {
              method: 'post',
              url: 'https://api.genio.app/get-out/getToken',
              headers: {
                'Content-Type': 'application/json'
              },
              data: data
            };

            axios(config)
              .then(function (response) {
                // console.log(JSON.stringify(response.data.token));
                axios({
                  method: 'post',
                  url: 'https://api.genio.app/matrix/getchild/' + `?token=${response.data.token}`,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data: JSON.stringify({
                    "email": pro.email,
                  })
                })
                  .then(async (response) => {
                    console.log(resopnse.data)
                    setchildren(response.data)
                    await AsyncStorage.setItem('children', JSON.stringify(response.data))
                  })
                  .catch((error) => {
                  })
              })
              .catch(function (error) {
              });
          }
        }
      }
      else {
        // console.log('helo')
      }
    }
    check()
  }, [])
  const authContext = React.useMemo(
    () => ({
      Update: (data) => {
        if (data.logout) {
          setstatus('0')
          setchildren(null)
          setprofile(null)
          setnotifications(null)
          setnewnoti(null)
        }
        if (data.status) {
          setstatus(data.status)
        }
        if (data.children) {
          setchildren(data.children)
        }
        if (data.profile) {
          setprofile(data.profile)
        }
        if (data.notifications) {
          setnotifications(data.notifications)
        }
        if (data.newnoti) {
          setnewnoti(data.newnoti)
        }
        if (data.joined) {
          setjoined(data.joined)
        }
        if (data.camerastatus) {
          setCameraStatus(data.camerastatus)
        }
      },
    }),
    []
  );
  if (loading) {
    return <View style={{ backgroundColor: '#327feb' }} />
  }
  else {
    SplashScreen.hide()
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer ref={containerRef}>
          <Stack.Navigator initialRouteName={!status ? 'IntroSlider' : status === '2' ? 'Child' : 'Home'}>
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Child" component={ChildScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="GalleryScreen" component={GalleryScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="VideoScreen" component={VideoScreen} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="IndProf" component={IndProfile} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="Searching" component={Searching} />
            <Stack.Screen initialParams={data} options={{ headerShown: false, gestureDirection: 'vertical', transitionSpec: { open: { animation: 'timing', config: { duration: 600 } }, close: { animation: 'timing', config: { duration: 600 } } } }} name="Login" component={LoginScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Verified" component={Verified} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Unverified" component={Unverified} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Home" component={Bottom} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="Preview" component={ImagePreview} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="VideoPreview" component={VideoPreview} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="SinglePost" component={SinglePostScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Intro" component={IntroScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Camera" component={Camera} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="CreatePost" component={PostScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Gallery" component={Gallery} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="AddText" component={AddText} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="PostScreen" component={Upload} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="Browser" component={Browser} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="OTP" component={OTPScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="ChildSuccess" component={ChildSuccess} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="IntroSlider" component={IntroSlider} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="Settings" component={Settings} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Comments" component={Comments} />
            <Stack.Screen initialParams={data} options={({ route, navigation }) => sidewaysConfig(route, navigation)} name="Notifications" component={NotificationScreen} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="KidUser" component={KidUser} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="KidsAge" component={KidsAge} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="Includes" component={Includes} />
            <Stack.Screen initialParams={data} options={{ headerShown: false }} name="VideoFull" component={VideoFullScreen} />
          </Stack.Navigator>
          <NotifierRoot ref={notifierRef} />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

codePush.sync({
  updateDialog: false,
  installMode: codePush.InstallMode.ON_NEXT_RESTART
});
export default codePush(App);
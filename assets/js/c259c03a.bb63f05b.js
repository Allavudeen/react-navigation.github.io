"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[54521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},l=void 0,p={unversionedId:"custom-navigators",id:"version-6.x/custom-navigators",title:"Custom navigators",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-6.x/custom-navigators.md",sourceDirName:".",slug:"/custom-navigators",permalink:"/docs/custom-navigators",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/custom-navigators.md",tags:[],version:"6.x",frontMatter:{id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},sidebar:"version-6.x/docs",previous:{title:"Custom routers",permalink:"/docs/custom-routers"},next:{title:"Migration Guides",permalink:"/docs/migration-guides"}},c={},u=[{value:"Built-in Navigators",id:"built-in-navigators",level:2},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",level:2},{value:"<code>useNavigationBuilder</code>",id:"usenavigationbuilder",level:3},{value:"<code>createNavigatorFactory</code>",id:"createnavigatorfactory",level:3},{value:"Type-checking navigators",id:"type-checking-navigators",level:2},{value:"Extending Navigators",id:"extending-navigators",level:2}],d={toc:u},m="wrapper";function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),(0,r.kt)("p",null,"Under the hood, navigators are plain React components."),(0,r.kt)("h2",{id:"built-in-navigators"},"Built-in Navigators"),(0,r.kt)("p",null,"We include some commonly needed navigators such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/stack-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createStackNavigator"))," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/drawer-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createDrawerNavigator"))," - Provides a drawer that slides in from the left of the screen by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/bottom-tab-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createBottomTabNavigator"))," - Renders a tab bar that lets the user switch between several screens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/material-top-tab-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," - Renders tab view which lets the user switch between several screens using swipe gesture or the tab bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/material-bottom-tab-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," - Renders tab view which lets the user switch between several screens using swipe gesture or the tab bar.")),(0,r.kt)("h2",{id:"api-for-building-custom-navigators"},"API for building custom navigators"),(0,r.kt)("p",null,"A navigator bundles a router and a view which takes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," and decides how to render it. We export a ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigationBuilder")," hook to build custom navigators that integrate with rest of React Navigation."),(0,r.kt)("h3",{id:"usenavigationbuilder"},(0,r.kt)("inlineCode",{parentName:"h3"},"useNavigationBuilder")),(0,r.kt)("p",null,"This hook allows a component to hook into React Navigation. It accepts the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"createRouter")," - A factory method which returns a router object (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"StackRouter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TabRouter"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")," - Options for the hook and the router. The navigator should forward its props here so that user can provide props to configure the navigator. By default, the following options are accepted:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," (required) - The ",(0,r.kt)("inlineCode",{parentName:"li"},"children")," prop should contain route configurations as ",(0,r.kt)("inlineCode",{parentName:"li"},"Screen")," components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenOptions")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"screenOptions")," prop should contain default options for all of the screens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," prop determines the screen to focus on initial render. This prop is forwarded to the router.")),(0,r.kt)("p",{parentName:"li"},"If any other options are passed here, they'll be forwarded to the router."))),(0,r.kt)("p",null,"The hook returns an object with following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"state")," - The ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," for the navigator. The component can take this state and decide how to render it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," - The navigation object containing various helper methods for the navigator to manipulate the ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state"),". This isn't the same as the navigation object for the screen and includes some helpers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," to emit events to the screens.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"descriptors")," - This is an object containing descriptors for each route with the route keys as its properties. The descriptor for a route can be accessed by ",(0,r.kt)("inlineCode",{parentName:"p"},"descriptors[route.key]"),". Each descriptor contains the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigation")," - The navigation prop for the screen. You don't need to pass this to the screen manually. But it's useful if we're rendering components outside the screen that need to receive ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation")," prop as well, such as a header component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," - A getter which returns the options such as ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," for the screen if they are specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render")," - A function which can be used to render the actual screen. Calling ",(0,r.kt)("inlineCode",{parentName:"li"},"descriptors[route.key].render()")," will return a React element containing the screen content. It's important to use this method to render a screen, otherwise any child navigators won't be connected to the navigation tree properly.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text, Pressable, View } from 'react-native';\nimport {\n  NavigationHelpersContext,\n  useNavigationBuilder,\n  TabRouter,\n  TabActions,\n} from '@react-navigation/native';\n\nfunction TabNavigator({\n  initialRouteName,\n  children,\n  screenOptions,\n  tabBarStyle,\n  contentStyle,\n}) {\n  const { state, navigation, descriptors, NavigationContent } =\n    useNavigationBuilder(TabRouter, {\n      children,\n      screenOptions,\n      initialRouteName,\n    });\n\n  return (\n    <NavigationContent>\n      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>\n        {state.routes.map((route) => (\n          <Pressable\n            key={route.key}\n            onPress={() => {\n              const event = navigation.emit({\n                type: 'tabPress',\n                target: route.key,\n                canPreventDefault: true,\n              });\n\n              if (!event.defaultPrevented) {\n                navigation.dispatch({\n                  ...TabActions.jumpTo(route.name),\n                  target: state.key,\n                });\n              }\n            }}\n            style={{ flex: 1 }}\n          >\n            <Text>{descriptors[route.key].options.title || route.name}</Text>\n          </Pressable>\n        ))}\n      </View>\n      <View style={[{ flex: 1 }, contentStyle]}>\n        {state.routes.map((route, i) => {\n          return (\n            <View\n              key={route.key}\n              style={[\n                StyleSheet.absoluteFill,\n                { display: i === state.index ? 'flex' : 'none' },\n              ]}\n            >\n              {descriptors[route.key].render()}\n            </View>\n          );\n        })}\n      </View>\n    </NavigationContent>\n  );\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," object for navigators also has an ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," method to emit custom events to the child screens. The usage looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.emit({\n  type: 'transitionStart',\n  data: { blurring: false },\n  target: route.key,\n});\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," object, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"event.data"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," property determines the screen that will receive the event. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," property is omitted, the event is dispatched to all screens in the navigator."),(0,r.kt)("h3",{id:"createnavigatorfactory"},(0,r.kt)("inlineCode",{parentName:"h3"},"createNavigatorFactory")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"createNavigatorFactory")," function is used to create a function that will ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," pair. Custom navigators need to wrap the navigator component in ",(0,r.kt)("inlineCode",{parentName:"p"},"createNavigatorFactory")," before exporting."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  useNavigationBuilder,\n  createNavigatorFactory,\n} from '@react-navigation/native';\n\n// ...\n\nexport const createMyNavigator = createNavigatorFactory(TabNavigator);\n")),(0,r.kt)("p",null,"Then it can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createMyNavigator } from \'./myNavigator\';\n\nconst My = createMyNavigator();\n\nfunction App() {\n  return (\n    <My.Navigator>\n      <My.Screen name="Home" component={HomeScreen} />\n      <My.Screen name="Feed" component={FeedScreen} />\n    </My.Navigator>\n  );\n}\n')),(0,r.kt)("h2",{id:"type-checking-navigators"},"Type-checking navigators"),(0,r.kt)("p",null,"To type-check navigators, we need to provide 3 types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type of the props accepted by the view"),(0,r.kt)("li",{parentName:"ul"},"Type of supported screen options"),(0,r.kt)("li",{parentName:"ul"},"A map of event types emitted by the navigator")),(0,r.kt)("p",null,"For example, to type-check our custom tab navigator, we can do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport {\n  View,\n  Text,\n  Pressable,\n  StyleProp,\n  ViewStyle,\n  StyleSheet,\n} from 'react-native';\nimport {\n  createNavigatorFactory,\n  DefaultNavigatorOptions,\n  ParamListBase,\n  CommonActions,\n  TabActionHelpers,\n  TabNavigationState,\n  TabRouter,\n  TabRouterOptions,\n  useNavigationBuilder,\n} from '@react-navigation/native';\n\n// Props accepted by the view\ntype TabNavigationConfig = {\n  tabBarStyle: StyleProp<ViewStyle>;\n  contentStyle: StyleProp<ViewStyle>;\n};\n\n// Supported screen options\ntype TabNavigationOptions = {\n  title?: string;\n};\n\n// Map of event name and the type of data (in event.data)\n//\n// canPreventDefault: true adds the defaultPrevented property to the\n// emitted events.\ntype TabNavigationEventMap = {\n  tabPress: {\n    data: { isAlreadyFocused: boolean };\n    canPreventDefault: true;\n  };\n};\n\n// The props accepted by the component is a combination of 3 things\ntype Props = DefaultNavigatorOptions<\n  ParamListBase,\n  TabNavigationState<ParamListBase>,\n  TabNavigationOptions,\n  TabNavigationEventMap\n> &\n  TabRouterOptions &\n  TabNavigationConfig;\n\nfunction TabNavigator({\n  initialRouteName,\n  children,\n  screenOptions,\n  tabBarStyle,\n  contentStyle,\n}: Props) {\n  const { state, navigation, descriptors, NavigationContent } =\n    useNavigationBuilder<\n      TabNavigationState<ParamListBase>,\n      TabRouterOptions,\n      TabActionHelpers<ParamListBase>,\n      TabNavigationOptions,\n      TabNavigationEventMap\n    >(TabRouter, {\n      children,\n      screenOptions,\n      initialRouteName,\n    });\n\n  return (\n    <NavigationContent>\n      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>\n        {state.routes.map((route) => (\n          <Pressable\n            key={route.key}\n            onPress={() => {\n              const event = navigation.emit({\n                type: 'tabPress',\n                target: route.key,\n                canPreventDefault: true,\n                data: {\n                  isAlreadyFocused: route.key === state.routes[state.index].key,\n                },\n              });\n\n              if (!event.defaultPrevented) {\n                navigation.dispatch({\n                  ...CommonActions.navigate({ name: route.name, merge: true }),\n                  target: state.key,\n                });\n              }\n            }}\n            style={{ flex: 1 }}\n          >\n            <Text>{descriptors[route.key].options.title || route.name}</Text>\n          </Pressable>\n        ))}\n      </View>\n      <View style={[{ flex: 1 }, contentStyle]}>\n        {state.routes.map((route, i) => {\n          return (\n            <View\n              key={route.key}\n              style={[\n                StyleSheet.absoluteFill,\n                { display: i === state.index ? 'flex' : 'none' },\n              ]}\n            >\n              {descriptors[route.key].render()}\n            </View>\n          );\n        })}\n      </View>\n    </NavigationContent>\n  );\n}\n\nexport default createNavigatorFactory<\n  TabNavigationState<ParamListBase>,\n  TabNavigationOptions,\n  TabNavigationEventMap,\n  typeof TabNavigator\n>(TabNavigator);\n")),(0,r.kt)("h2",{id:"extending-navigators"},"Extending Navigators"),(0,r.kt)("p",null,"All of the built-in navigators export their views, which we can reuse and build additional functionality on top of them. For example, if we want to re-build the bottom tab navigator, we need the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport {\n  useNavigationBuilder,\n  createNavigatorFactory,\n  TabRouter,\n} from '@react-navigation/native';\nimport { BottomTabView } from '@react-navigation/bottom-tabs';\n\nfunction BottomTabNavigator({\n  initialRouteName,\n  backBehavior,\n  children,\n  screenOptions,\n  ...rest\n}) {\n  const { state, descriptors, navigation, NavigationContent } =\n    useNavigationBuilder(TabRouter, {\n      initialRouteName,\n      backBehavior,\n      children,\n      screenOptions,\n    });\n\n  return (\n    <NavigationContent>\n      <BottomTabView\n        {...rest}\n        state={state}\n        navigation={navigation}\n        descriptors={descriptors}\n      />\n    </NavigationContent>\n  );\n}\n\nexport default createNavigatorFactory(BottomTabNavigator);\n")),(0,r.kt)("p",null,"Now, we can customize it to add additional functionality or change the behavior. For example, use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/custom-routers"},"custom router")," instead of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"TabRouter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import MyRouter from './MyRouter';\n\n// ...\n\nconst { state, descriptors, navigation, NavigationContent } =\n  useNavigationBuilder(MyRouter, {\n    initialRouteName,\n    backBehavior,\n    children,\n    screenOptions,\n  });\n\n// ...\n")))}v.isMDXComponent=!0}}]);
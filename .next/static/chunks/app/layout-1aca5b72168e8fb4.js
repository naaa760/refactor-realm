(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{41226:()=>{},41158:(e,t,r)=>{Promise.resolve().then(r.bind(r,56556)),Promise.resolve().then(r.bind(r,95309)),Promise.resolve().then(r.bind(r,12326)),Promise.resolve().then(r.bind(r,53647)),Promise.resolve().then(r.bind(r,19173)),Promise.resolve().then(r.bind(r,49930)),Promise.resolve().then(r.t.bind(r,44839,23)),Promise.resolve().then(r.t.bind(r,22807,23)),Promise.resolve().then(r.t.bind(r,79574,23)),Promise.resolve().then(r.bind(r,55037)),Promise.resolve().then(r.t.bind(r,30347,23)),Promise.resolve().then(r.bind(r,74301))},95309:(e,t,r)=>{"use strict";r.r(t),r.d(t,{KeylessCookieSync:()=>o});var n=r(12115),i=r(5650);function o(e){return(0,n.useEffect)(()=>{i.V&&r.e(734).then(r.bind(r,64734)).then(t=>t.syncKeylessConfigAction({...e,returnUrl:window.location.href}))},[]),e.children}},19173:(e,t,r)=>{"use strict";r.d(t,{PromisifiedAuthProvider:()=>l,d:()=>c});var n=r(86414),i=r(33659),o=r(68766),s=r(12115);let a=s.createContext(null);function l(e){let{authPromise:t,children:r}=e;return s.createElement(a.Provider,{value:t},r)}function c(){let e=(0,o.useRouter)(),t=s.useContext(a),r=t;return(t&&"then"in t&&(r=s.use(t)),"undefined"!=typeof window)?(0,n.As)(r):e?(0,n.As)():(0,i.hP)(r)}},12326:(e,t,r)=>{"use strict";r.d(t,{AuthenticateWithRedirectCallback:()=>n.B$,ClerkLoaded:()=>n.z0,ClerkLoading:()=>n.A0,RedirectToCreateOrganization:()=>n.rm,RedirectToOrganizationProfile:()=>n.m2,RedirectToSignIn:()=>n.W5,RedirectToSignUp:()=>n.mO,RedirectToUserProfile:()=>n.eG});var n=r(86414);r(33659)},53647:(e,t,r)=>{"use strict";r.d(t,{useAuth:()=>i.d,useClerk:()=>n.ho,useEmailLink:()=>n.ui,useOrganization:()=>n.Z5,useOrganizationList:()=>n.D_,useReverification:()=>n.Wp,useSession:()=>n.wV,useSessionList:()=>n.g7,useSignIn:()=>n.go,useSignUp:()=>n.yC,useUser:()=>n.Jd});var n=r(86414);r(3006);var i=r(19173)},49930:(e,t,r)=>{"use strict";r.d(t,{CreateOrganization:()=>n.ul,GoogleOneTap:()=>n.PQ,OrganizationList:()=>n.oE,OrganizationProfile:()=>m,OrganizationSwitcher:()=>n.NC,SignIn:()=>f,SignInButton:()=>n.hZ,SignInWithMetamaskButton:()=>n.M_,SignOutButton:()=>n.ct,SignUp:()=>g,SignUpButton:()=>n.Ny,UserButton:()=>n.uF,UserProfile:()=>h,Waitlist:()=>n.cP});var n=r(86414),i=r(12115),o=r(33659),s=r(36514),a=r(68766);let l=()=>({pagesRouter:(0,a.useRouter)()}),c=(e,t,r,o=!0)=>{let a=i.useRef(0),{pagesRouter:c}=l(),{session:u,isLoaded:d}=(0,n.wV)();(0,s.Fj)()||i.useEffect(()=>{if(!d||r&&"path"!==r||o&&!u)return;let n=new AbortController,i=()=>{let r=c?`${t}/[[...index]].tsx`:`${t}/[[...rest]]/page.tsx`;throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${r}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`)};return c?c.pathname.match(/\[\[\.\.\..+]]/)||i():(async()=>{let t;if(a.current++,!(a.current>1)){try{let r=`${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;t=await fetch(r,{signal:n.signal})}catch(e){}(null==t?void 0:t.status)===404&&i()}})(),()=>{a.current>1&&n.abort()}},[d])},u=()=>{let e=i.useRef(),{pagesRouter:t}=l();if(t)return e.current||(e.current=t.pathname.replace(/\/\[\[\.\.\..*/,"")),e.current;let n=r(76046).usePathname,o=r(76046).useParams,s=(n()||"").split("/").filter(Boolean),a=Object.values(o()||{}).filter(e=>Array.isArray(e)).flat(1/0);return e.current||(e.current=`/${s.slice(0,s.length-a.length).join("/")}`),e.current};function d(e,t,r=!0){let n=u(),i=(0,o.yC)(e,t,{path:n});return c(e,n,i.routing,r),i}let h=Object.assign(e=>i.createElement(n.Fv,{...d("UserProfile",e)}),{...n.Fv}),m=Object.assign(e=>i.createElement(n.nC,{...d("OrganizationProfile",e)}),{...n.nC}),f=e=>i.createElement(n.Ls,{...d("SignIn",e,!1)}),g=e=>i.createElement(n.Hx,{...d("SignUp",e,!1)})},74301:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(95155),i=r(49213),o=r(19173),s=r(37177),a=r(12115),l=r(53317);function c({children:e,client:t,useAuth:r}){let n=(0,a.useMemo)(()=>function(){let{isLoaded:e,isSignedIn:t,getToken:n,orgId:i,orgRole:o}=r(),s=(0,a.useCallback)(async({forceRefreshToken:e})=>{try{return n({template:"convex",skipCache:e})}catch{return null}},[n,i,o]);return(0,a.useMemo)(()=>({isLoading:!e,isAuthenticated:t??!1,fetchAccessToken:s}),[e,t,s])},[r]);return a.createElement(l.N,{client:t,useAuth:n},e)}let u=new s.eH("https://dusty-fly-429.convex.cloud"),d=function(e){let{children:t}=e;return(0,n.jsx)(i.lJ,{publishableKey:"pk_test_bXV0dWFsLW9wb3NzdW0tMzYuY2xlcmsuYWNjb3VudHMuZGV2JA",children:(0,n.jsx)(c,{client:u,useAuth:o.d,children:t})})}},30347:()=>{},59812:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var n=r(75828);let i=(0,n.createServerReference)("7f8dbc04202f84dc38a1b1f094811389392d78fb0f",n.callServer,void 0,n.findSourceMapURL,"invalidateCacheAction")},79574:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},22807:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[659,296,558,37,441,517,358],()=>t(41158)),_N_E=e.O()}]);
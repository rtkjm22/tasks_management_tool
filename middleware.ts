import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/organization(.*)'])

export default clerkMiddleware(
  // TODO: Organizationおよびログイン周りの修正
//   (auth, req) => {
//   // console.log(auth)
//   // if (auth().userId && auth().isPublicRoute) {
//   //   let path = '/select-org'
//   //   if (auth().orgId) {
//   //     path = `/organization/${auth().orgId}`
//   //   }
//   //   const orgSelection = new URL(path, req.url)
//   //   return NextResponse.redirect(orgSelection)
//   // }

//   // if (!auth().userId && !auth().isPublicRoute) {
//   //   return auth.redirectToSignIn(req.url)
//   // }

//   // if (auth().userId && !auth().orgId && req.nextUrl.pahtname !== '/select-org') {

//   // }

//   console.log(
//     '````````````````````````````````````````````````````````````````````````````'
//   )
//   console.log(req)
//   console.log(
//     '````````````````````````````````````````````````````````````````````````````'
//   )

//   if (auth().userId && !isProtectedRoute(req)) {
//     let path = '/select-org'
//     if (auth().orgId) {
//       path = `/organization/${auth().orgId}`
//     }
//     const orgSelection = new URL(path, req.url)
//     return NextResponse.redirect(orgSelection)
//   }

//   if (!auth().userId && isProtectedRoute(req)) {
//     return auth().redirectToSignIn()
//   }

//   if (
//     auth().userId &&
//     !auth().orgId &&
//     req.nextUrl.pathname !== '/select-org'
//   ) {
//     const orgSelection = new URL('/select-org', req.url)
//     return NextResponse.redirect(orgSelection)
//   }
// }
)

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}

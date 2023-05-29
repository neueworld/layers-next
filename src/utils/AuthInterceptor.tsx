/**
 * This is a TypeScript React function that registers an interceptor to modify requests and responses
 * for authentication purposes.
 * @returns The `AuthInterceptor` function is not returning anything. It is registering an interceptor
 * using the `fetchIntercept.register` method. The interceptor modifies the request and response
 * objects and handles errors.
 */
// import fetchIntercept from 'fetch-intercept';

// export const AuthInterceptor = () => {
//   fetchIntercept.register({
//     request: function (url: any, config: { credentials: string }) {
//       // Modify the url or config here
//       //   config.headers.name = 'Aravindh';
//       if (url.includes('/auth')) {
//         config.credentials = 'include';
//       }
//       return [url, config];
//     },

//     requestError: function (error: any) {
//       // Called when an error occured during another 'request' interceptor call
//       return Promise.reject(error);
//     },

//     response: function (response: any) {
//       // Modify the reponse object
//       return response;
//     },

//     responseError: function (error: any) {
//       // Handle an fetch error
//       return Promise.reject(error);
//     }
//   });
// };

export const AuthInterceptor = () => {
  return <div>AuthInterceptor</div>;
};

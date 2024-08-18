export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://media.licdn.com/dms/image/D5603AQG-DHGyl5hNFA/profile-displayphoto-shrink_200_200/0/1705678371447?e=2147483647&v=beta&t=BFUwAAwxMOS-hFjLTXNQXUaiY72S-usWbvrFbeHZtmE";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      process.env.REACT_APP_TMDB_AUTHORIZATION_TOKEN,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w300";
export const IMG_URL_HD = "https://image.tmdb.org/t/p/original";

export const SEARCH_QUERY = "Act as a movies suggestion system and suggest movies for the query:";

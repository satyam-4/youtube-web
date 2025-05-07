export const paths = {
    home: {
        path: "/",
        getHref: () => "/"
    },
    subscriptions: {
        path: "/subscriptions",
        getHref: () => "/subscriptions"
    },
    you: {
        path: "/you",
        getHref: () => "/you"
    },
    watchLater: {
        path: "/watch-later",
        getHref: () => "/watch-later"
    },
    playlists: {
        path: "/playlists",
        getHref: () => "/playlists"
    },
    history: {
        path: "/history",
        getHref: () => "/history"
    },
    likedVideos: {
        path: "/liked-videos",
        getHref: () => "/liked-videos"
    },
    settings: {
        path: "/settings",
        getHref: () => "/settings"
    },
    feedback: {
        path: "/feedback",
        getHref: () => "/feedback"
    },
    auth: {
        register : {
            path: "/auth/register",
            getHref: (redirectTo) => (
                redirectTo 
                ? `/auth/register?redirectTo=${encodeURIComponent(redirectTo)}`
                : `/auth/register`
            )
        },
        login: {
            path: "/auth/login",
            getHref: (redirectTo) => (
                redirectTo
                ? `/auth/login?redirectTo=${encodeURIComponent(redirectTo)}`
                : `/auth/login`
            )
        }
    },
}
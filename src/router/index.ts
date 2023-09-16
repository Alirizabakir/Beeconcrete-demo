import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw,
} from "vue-router";
import {useAuthStore} from "@/stores/auth";
import {useConfigStore} from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("@/layouts/main-layout/MainLayout.vue"),
        meta: {
            middleware: "auth",
        },
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/Home.vue"),
                meta: {
                    pageTitle: "Home",
                    breadcrumbs: ["Home"],
                },
            },
            {
                path: "/products",
                name: "products",
                component: () => import("@/views/products/Products.vue"),
                meta: {
                    pageTitle: "Products",
                    breadcrumbs: ["Products"],
                },
                children: [
                    {
                        path: ":id",
                        name: "collections",
                        component: () => import("@/views/products/Products.vue"),
                        meta: {
                            pageTitle: "Products",
                            breadcrumbs: ["Collections"],
                        },
                        children: [
                            {
                                path: ":id",
                                name: "product-details",
                                component: () => import("@/views/products/Products.vue"),
                                meta: {
                                    pageTitle: "Products",
                                    breadcrumbs: ["Products"],
                                },
                            },
                        ],
                    },
                ]
            },
            {
                path: "/detail/:id",
                name: "detail",
                component: () => import("@/views/products/Detail.vue"),
                meta: {
                    pageTitle: "Detail",
                    breadcrumbs: ["Detail"],
                },
            },
            {
                path: "/blog",
                name: "blog",
                component: () => import("@/views/blog/Blog.vue"),
                meta: {
                    pageTitle: "Products",
                    breadcrumbs: ["Products"],
                },
            },
            {
                path: "/blog/:id",
                name: "blog-details",
                component: () => import("@/views/blog/Detail.vue"),
                meta: {
                    pageTitle: "Blog Details",
                    breadcrumbs: ["Blog Details"],
                },
            },
            {
                path: "/about",
                name: "about",
                component: () => import("@/views/about/About.vue"),
                meta: {
                    pageTitle: "About Us",
                    breadcrumbs: ["About Us"],
                },
            },
            {
                path: "/contact",
                name: "contact",
                component: () => import("@/views/contact/Contact.vue"),
                meta: {
                    pageTitle: "Contact Us",
                    breadcrumbs: ["Contact Us"],
                },
            },
            {
                path: "/basket",
                name: "basket",
                component: () => import("@/views/basket/Basket.vue"),
                meta: {
                    pageTitle: "Basket",
                    breadcrumbs: ["Basket"],
                },
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("@/views/profile/Profile.vue"),
                meta: {
                    pageTitle: "Profile",
                    breadcrumbs: ["Profile"],
                },
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
                meta: {
                    pageTitle: "Sign In",
                },
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
                meta: {
                    pageTitle: "Sign Up",
                },
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
                meta: {
                    pageTitle: "Password reset",
                },
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/SystemLayout.vue"),
        children: [
            {
                // the 404 route, when none of the above matches
                path: "/404",
                name: "404",
                component: () => import("@/views/crafted/authentication/Error404.vue"),
                meta: {
                    pageTitle: "Error 404",
                },
            },
            {
                path: "/500",
                name: "500",
                component: () => import("@/views/crafted/authentication/Error500.vue"),
                meta: {
                    pageTitle: "Error 500",
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const configStore = useConfigStore();

    // current page view title
    document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

    // reset config to initial state
    configStore.resetLayoutConfig();

    // verify auth token before each page change
    authStore.verifyAuth();

    // before page access check if page requires authentication
    if (to.meta.middleware == "auth") {
        if (authStore.isAuthenticated) {
            next();
        } else {
            next({name: "sign-in"});
        }
    } else {
        next();
    }

    // Scroll page to top on every route change
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

export default router;

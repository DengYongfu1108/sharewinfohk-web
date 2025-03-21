import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home/HomePage.vue')
    },
    {
        path: '/productsDap',
        name: 'productsDap',
        component: () => import('../pages/Products/ProductsDAP.vue')
    },
    {
        path: '/productsDae',
        name: 'productsDae',
        component: () => import('../pages/Products/ProductsDAE.vue')
    },
    {
        path: '/productsWinBi',
        name: 'productsWinBi',
        component: () => import('../pages/Products/ProductsWinBi.vue')
    },
    {
        path: '/productsDqt',
        name: 'productsDqt',
        component: () => import('../pages/Products/ProductsDQT.vue')
    },
    {
        path: '/ProductsPBIPortal',
        name: 'ProductsPBIPortal',
        component: () => import('../pages/Products/ProductsPBIPortal.vue')
    },
    {
        path: '/ProductsPBIVisual',
        name: 'ProductsPBIVisual',
        component: () => import('../pages/Products/ProductsPBIVisual.vue')
    },
    {
        path: '/ProductsPPT',
        name: 'ProductsPPT',
        component: () => import('../pages/Products/ProductsPPT.vue')
    },
    {
        path: '/ProductsDMP',
        name: 'ProductsDMP',
        component: () => import('../pages/Products/ProductsDMP.vue')
    },
    {
        path: '/ProductsDdm',
        name: 'ProductsDdm',
        component: () => import('../pages/Products/ProductsDDM.vue')
    },
    {
        path: '/ProductsDqm',
        name: 'ProductsDqm',
        component: () => import('../pages/Products/ProductsDQM.vue')
    },
    {
        path: '/ProductsBLis',
        name: 'ProductsBiLs',
        component: () => import('../pages/Products/ProductsBILS.vue')
    },
    {
        path: '/SolutionAzureBi',
        name: 'SolutionAzureBi',
        component: () => import('../pages/Solution/SolutionAzureBi.vue')
    },
    {
        path: '/SolutionPpf',
        name: 'SolutionPpf',
        component: () => import('../pages/Solution/SolutionPPF.vue')
    },
    {
        path: '/SolutionDap',
        name: 'SolutionDap',
        component: () => import('../pages/Solution/SolutionDAP.vue')
    },
    {
        path: '/SolutionIM',
        name: 'SolutionIM',
        component: () => import('../pages/Solution/SolutionIM.vue')
    },
    {
        path: '/SolutionDP',
        name: 'SolutionDP',
        component: () => import('../pages/Solution/SolutionDP.vue')
    },
    {
        path: '/SolutionMiniTab',
        name: 'SolutionMiniTab',
        component: () => import('../pages/Solution/SolutionMiniTab.vue')
    },
    {
        path: '/SolutionWeBull',
        name: 'SolutionWeBull',
        component: () => import('../pages/Solution/SolutionWeBull.vue')
    },
    {
        path: '/SolutionDMP',
        name: 'SolutionDMP',
        component: () => import('../pages/Solution/SolutionDMP.vue')
    },
    {
        path: '/SolutionEDW',
        name: 'SolutionEDW',
        component: () => import('../pages/Solution/SolutionEDW.vue')
    },
    {
        path: '/SolutionDG',
        name: 'SolutionDG',
        component: () => import('../pages/Solution/SolutionDG.vue')
    },
    {
        path: '/SolutionDO',
        name: 'SolutionDO',
        component: () => import('../pages/Solution/SolutionDO.vue')
    },
    {
        path: '/ServicesDAP',
        name: 'ServicesDAP',
        component: () => import('../pages/Services/ServicesDAP.vue')
    },
    {
        path: '/ServicesAB',
        name: 'ServicesAB',
        component: () => import('../pages/Services/ServicesAB.vue')
    },
    {
        path: '/ServicesIT',
        name: 'ServicesIT',
        component: () => import('../pages/Services/ServicesIT.vue')
    },
    {
        path: '/ServicesCP',
        name: 'ServicesCP',
        component: () => import('../pages/Services/ServicesCP.vue')
    },
    {
        path: '/ServicesEM',
        name: 'ServicesEM',
        component: () => import('../pages/Services/ServicesEM.vue')
    },
    {
        path: '/IndustryRetail',
        name: 'IndustryRetail',
        component: () => import('../pages/Industry/IndustryRetail.vue')
    },
    {
        path: '/IndustryM',
        name: 'IndustryM',
        component: () => import('../pages/Industry/IndustryM.vue')
    },
    {
        path: '/IndustryCI',
        name: 'IndustryCI',
        component: () => import('../pages/Industry/IndustryCI.vue')
    },
    {
        path: '/AboutUsEH',
        name: 'AboutUsEH',
        component: () => import('../pages/AboutUs/AboutUsEH.vue')
    },
    {
        path: '/AboutUsPartner',
        name: 'AboutUsPartner',
        component: () => import('../pages/AboutUs/AboutUsPartner.vue')
    },
    {
        path: '/AboutUsCantactUs',
        name: 'AboutUsCantactUs',
        component: () => import('../pages/AboutUs/AboutUsCantactUs.vue')
    },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 可以在这里进行权限验证等操作
    console.log(`导航到: ${to.name}`);
    next();
});
export default router;
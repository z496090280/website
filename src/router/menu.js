/*
 * @Author: lee
 * @Date: 2022-03-03 11:06:56
 * @LastEditTime: 2022-03-03 14:45:30
 */
import Home from '@/pages/Home'
import CommoditySelection from '@/pages/CommoditySelection'
import B2CZg from '@/pages/B2CZg'
import YttxB2B from '@/pages/YttxB2B'
import Cooperation from '@/pages/Cooperation'
import ToJoin from '@/pages/ToJoin'
import CompanyProfile from '@/pages/CompanyProfile'
import Distributor from '@/pages/Distributor'
import BrandSide from '@/pages/BrandSide'
import StoreTerminal from '@/pages/StoreTerminal'
import Zq from '@/pages/Zq'


const menuList = [
    { name: '首页', path: '/', component: Home, index: '1' },
    { name: '商品精选', path: '/CommoditySelection', component: CommoditySelection, index: '2' },
    { name: '整购B2C', path: '/ZgB2C', component: B2CZg, index: '3' },
    { name: '怡通天下B2B', path: '/YttxB2B', component: YttxB2B, index: '4' },
    { name: '加盟合作', path: '/cooperation', component: Cooperation, index: '5', children: [
        { name: '我是经销商', path: 'dbr', component: Distributor, index: '5-1' },
        { name: '我是品牌方', path: 'brandSide', component: BrandSide, index: '5-2' },
        { name: '我是门店终端', path: 'storeTerminal', component: StoreTerminal, index: '5-3' },
        { name: '我是政企', path: 'zq', component: Zq, index: '5-4' },
    ] },
    { name: '我要加入', path: '/toJoin', component: ToJoin, index: '6' },
    { name: '公司简介', path: '/companyProfile', component: CompanyProfile, index: '7' },
]
export default menuList
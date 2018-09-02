const state = {
    token: '',  
    navbar: ['电影', '图书', '广播', '小组'],
    navbar: [
        {title: '电影', id: 1, path: '/film'},
        {title: '图书', id: 2, path: '/book'},
        {title: '广播', id: 3, path: '/radio'},
        {title: '小组', id: 4, path: '/group'},
    ],
    homeShow: [
            {title: '影院热映', id: 1, path: '/film/hotMovie'},
            {title: '华语新碟榜', id: 2, path: '/home/newMusic'},
            {title: '豆瓣时间', id: 3, path: '/home/time'},
            {title: '使用豆瓣APP', id: 4, path: '/home/useApp'},
    ]
}

export default state
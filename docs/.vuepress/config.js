module.exports = {
    base: 'Yui',
    title: 'Yui库',
    description: '文档',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/guide/home/home'
        }],
        sidebar: [{
                title: '介绍',
                collapsable: false, //是否展开
            },
            ['./guide/home/home', '首页'],
            {
                title: '组件',
                collapsable: false
            },
            ['./guide/button/button', 'button'],
        ]
    }
}
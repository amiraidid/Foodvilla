
function HeroCard() {
    
    const items = [ 
        {icon: 'bi bi-telephone-inbound-fill', title: '24/7 Support', sub: 'instant support'},
        {icon: 'bi bi-truck', title: 'Free Shipping', sub: 'orders over $100'},
        {icon: 'bi bi-gift', title: 'Special Discount', sub: 'get special discount'},
        {icon: 'bi bi-cash', title: 'Easy Payment', sub: '100% secure payment'}
    ];


    return (
        <div className={`hero-card flex justify-evenly py-2`}>
                {
                    items.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 py-2'>
                            <i className={`${item.icon} bg-white p-2 rounded-md`}></i>
                            <span>
                                <h1 className='text-gray-900 font-semibold'>{item.title}</h1>
                                <h2 className='text-gray-700'>{item.sub}</h2>
                            </span>
                        </div>
                    ))
                }
        </div>
    )
}

export default HeroCard
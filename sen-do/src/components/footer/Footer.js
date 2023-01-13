import './Footer.css';
function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='footer__element'>
                    <a className='footer__icon-name' href=''>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png" alt='Siêu nhiều hành tốt' className='footer__img' />
                        <div className='footer__item-name'>
                            <div className='footer--name--weight'>Siêu nhiều hàng tốt</div>
                            <div className='footer--name'>Cần gì cũng 26 ngành hàng & 10 triệu sản phẩm</div>
                        </div>
                    </a>
                    <a className='footer__icon-name' href=''>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png" alt='Siêu nhiều hành tốt' className='footer__img' />
                        <div className='footer__item-name'>
                            <div className='footer--name--weight'>Siêu yên tâm</div>
                            <div className='footer--name'>Miễn phí đổi trả 48h</div>
                        </div>
                    </a>
                    <a className='footer__icon-name' href=''>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png" alt='Siêu nhiều hành tốt' className='footer__img' />
                        <div className='footer__item-name'>
                            <div className='footer--name--weight'>Siêu tiện lợi</div>
                            <div className='footer--name'>Mnag thế giới mua sắm của Sendo trong tầm tay bạn</div>
                        </div>
                    </a>
                    <a className='footer__icon-name' href=''>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png" alt='Siêu nhiều hành tốt' className='footer__img' />
                        <div className='footer__item-name'>
                            <div className='footer--name--weight'>Siêu tiết kiệm</div>
                            <div className='footer--name'>Gía hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='footer__info'>
                <div className='footer__info-us'>
                    <h3>VỀ CHÚNG TÔI</h3>
                    <a href=''>Giới thiệu Sendo.vn</a>
                    <a href=''>Giới thiệu SenMall</a>
                    <a href=''>Quy chế hoạt động</a>
                    <a href=''>Chính sách bảo mật</a>
                    <a href=''>Giao hàng và Nhận hàng</a>
                </div>
                <div className='footer__info-us'>
                    <h3>DÀNH CHO NGƯỜI MUA</h3>
                    <a href=''>Giải quyết khiếu nại</a>
                    <a href=''>Hướng dẫn mua hàng</a>
                    <a href=''>Chính sách đổi trả</a>
                    <a href=''>Chăm sóc khách hàng</a>
                    <a href=''>Nạp tiền điện thoại</a>
                </div>
                <div className='footer__info-us'>
                    <h3>DÀNH CHO NGƯỜI BÁN</h3>
                    <a href=''>Quy định đối với người bán</a>
                    <a href=''>Chính sách bán hàng</a>
                    <a href=''>Hệ thống tiêu chí kiểm duyệt</a>
                    <a href=''>Mở shop trên Sendo</a>
                </div>
                <div className='footer__info-download'>
                    <h3>TẢI ỨNG DỤNG SENDO</h3>
                    <a href=''>Mnag thế giới mua sắm của Sendo trong tầm tay bạn</a>
                    <div>
                        <img src='https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png' alt='app-store' className='app-img' />
                        <img src='https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png' alt='google-play' className='app-img' />
                        <img src='https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png' alt='app-gallery' className='app-img' />
                    </div>
                </div>
            </div>
            <div className='footer__contact'>
                <div className='contact'>
                    <div className='contact--use'>
                        <h4>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</h4>
                        <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
                        <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                        <p>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
                        <p>Email: lienhe@sendo.vn</p>
                        <div className="certificate">
                            <a href=""><img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" alt='Bộ công thương' className='certificate-icon'/></a>
                            <a href=""><img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" alt='Bộ công thương-nói không với hàng giả' className='certificate-icon'/></a>
                        </div>
                    </div>
                    <div className="contact-your">
                        <h4>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</h4>
                        <div className='registration'>
                            <input placeholder="Email của bạn là"></input>
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;
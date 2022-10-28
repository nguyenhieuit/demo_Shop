function Shop() {
    return (
        <>
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Gender
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul className="collapse show list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Men</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Women</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Sale
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Sport</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Luxury</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Product
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Bag</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Sweather</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Sunglass</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="google.com">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="google.com">Men's</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="google.com">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="google.com" tabindex="-1">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="google.com">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="google.com">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Gender
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul className="collapse show list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Men</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Women</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Sale
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Sport</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Luxury</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="google.com">
                                    Product
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3" style={{ display: "none" }}>
                                    <li><a className="text-decoration-none" href="google.com">Bag</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Sweather</a></li>
                                    <li><a className="text-decoration-none" href="google.com">Sunglass</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="google.com">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="google.com">Men's</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="google.com">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" alt="img" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="google.com" tabindex="-1">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="google.com">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="google.com">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Shop;
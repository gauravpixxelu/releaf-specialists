import Link from "next/link";
import Image from "next/image";

export default function ShopSection() {
    return (
        <>
            <section className="shop-section">
                <div className="container">
                    <h2 className="big-heading">Shop</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="shop-image">
                                <Image
                                    src="/images/shop/shop1.jpg"
                                    width={370}
                                    height={370}
                                    alt="Shop1"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shop-image">
                                <Image
                                    src="/images/shop/shop2.jpg"
                                    width={370}
                                    height={370}
                                    alt="Shop2"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shop-text">
                                <h2>Finest selection of smoking Products & Accessories.</h2>
                                <Link href="https://justblazepgh.com/" className="green-btn site-btn" target="_blank">Buy Now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const slides = [
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2023-12/IMG_3074.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2023-05/Artboard%201%20copy%2012%20%282%29.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2023-01/Artboard%201%20copy%2011.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2023-01/Angular_banner.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2023-01/Turkcell%20GY%20Banner%20Go%CC%88rselleri-05.jpg",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2022-12/Turkcell%20GY%20Banner%20Go%CC%88rselleri-06.jpg",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2022-12/Turkcell%20GY%20Banner%20Go%CC%88rselleri-04_0.jpg",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2022-04/Siver%20Gu%CC%88venlik%20Eg%CC%86itim%20Banner__1360x440_siber_guvenlik_super_kadinlar_giris-01.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2022-04/C%23-Banner-Web-1360x440px-metinsiz.png",
  "https://gelecegiyazanlar.turkcell.com.tr/sites/default/files/slider/2021-11/RPA_Egitimleri_Banner_1.jpg",
];

export const blogs = [
  {
    h3: "Disk Encryption ve Yönetimi",
    p: "02 Ocak 2024 | BLOG",
    tag1: "#disk encryption",
    tag2: "#encryption",
  },
  {
    h3: "The website encountered an unexpected error. Pleas...",
    p: "17 Ocak 2024 | FORUM",
    tag1: "#microsoft-sql",
    tag2: "#sql-ile-veritabani",
  },
  {
    h3: "Bug Bounty: Siber Güvenlikte Ödül Avcılığı ve Kull...",
    p: "26 Aralık 2023 | BLOG",
    tag1: "#cyber-security",
    tag2: "#BugBounty",
  },
];

export const stories = [
  {
    h3: "Tekno Tea-m",
    h4: "Geleceği Yazan Kadınlar Projesi",
    p: "Geleceği Yazan Kadınlar İklim Fikir Maratonu”nda TeknoTea-M projesiyle birincilik ödülünün sahibi Hüsne Temur, Nimet Özmeral ve Semanur Erbay; gerek teknik, gerekse girişimcilik konusunda Turkcell ekibinin sağladığı mentorluk desteğiyle projelerini hayata geçirmek adına ilk adımı attılar.",
  },
  {
    h3: "Merve Canpolat",
    h4: "Geleceği Yazan Kadınlar Projesi",
    p: "Mapla Biotechnology projesiyle “Geleceği Yazan Kadınlar İklim Fikir Maratonu”nda ikincilik ödülü kazanan Merve Canpolat Atalay; Turkcell ekibinin projeyi sahiplenip, geliştirmesinden duyduğu mutluluğu ve 3 ay içerisinde patent başvurusunu tamamlayıp yıl sonunda da bir üretim tesisi kurmayı planladıklarını aktardı.",
  },
  {
    h3: "Fatma Aouani",
    h4: "Geleceği Yazan Kadınlar Projesi",
    p: "CH4.ai projesiyle “Geleceği Yazan Kadınlar İklim Fikir Maratonu”nda üçüncülük ödülü kazanan Fatma Aouani; Turkcell ekibinin mentorluk desteği sayesinde prototip geliştirme sürecinin en önemli aşamalarını hızlı kat ettiğini, bir yıl içinde prototipin bitmiş ve test edilmiş olmasını planladığını aktardı.",
  },
];

/* DAHA SONRA BUNU DEGISTIR.

import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

*/

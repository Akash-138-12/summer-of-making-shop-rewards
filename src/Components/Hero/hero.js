import React from 'react';
import './hero.css';
import { ShoppingCart } from 'lucide-react';

const Hero = () => {

    const items_object = [
        {
            id: 1,
            title: "Pile of Stickers",
            description: "This is a pile of stickers that you can order using shells, really gud stickers!!",
            image: "https://journey.90e2da927f7b2f6c30f10f86d1b5e679.r2.cloudflarestorage.com/jueo7ci2c3rpim0j2i4ov9e0yajk?response-content-disposition=inline%3B%20filename%3D%22pile_of_stickers.png%22%3B%20filename%2A%3DUTF-8%27%27pile_of_stickers.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=14147de7f716b4f968218760dfed0809%2F20250618%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250618T170247Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=dd01b5c390fdd374cb974981cfb32db3d9bdfc3c1393dace7fb615fc1ef76080",
        },
        {
            id: 2,
            title: "TIS-100",
            description: "TIS-100 is a programming/puzzle video game developed by Zachtronics Industries. The game has the player develop mock assembly language code to perform certain tasks on a fictional, virtualized 1970s computer that has been corrupted. The game was released for Windows, OS X, and Linux personal computers in July 2015",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODQwLCJwdXIiOiJibG9iX2lkIn19--bd312986c11cc5f624b518ac02e0c3b77a16665b/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0i4_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://store.steampowered.com/app/370360/TIS100/" },
            ]
        },
        {
            id: 3,
            title: "64GB USB Drive - Micro Center",
            description: "Micro Center 64GB SuperSpeed USB 3.1 (Gen 1) Flash Drive, 64GB Capacity",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--1a97fe9d21262424129d5fbe90b3128468c08857/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_10l_Kleki-removebg-preview(1).png",
            links: [
                { type: "MicroCenter", url: "https://www.microcenter.com/product/658440/micro-center-64gb-superspeed-usb-31-(gen-1)-flash-drive" },
            ]
        },
        {
            id: 4,
            title: "Hot Glue Gun",
            description: "Assark Hot Glue Gun, Mini Hot Glue Gun Kit with 30 Glue Sticks for School Crafts DIY Arts Quick Home Repairs, 20W (Blue)",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE1LCJwdXIiOiJibG9iX2lkIn19--ab5680327129b358019505dc14c09ed6e18db000/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z5_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.ae/Assark-Sticks-School-Repairs-20W/dp/B09FYWQ44L?th=1" },
            ]
        },
        {
            id: 5,
            title: "Domain Grant",
            description: "A domain name with .com / other will be granted",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjUyLCJwdXIiOiJibG9iX2lkIn19--9ee004694756d78b18a782aa73c3bb6f4febfbac/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_0qu_Kleki(1).png",
        },
        {
            id: 6,
            title: "CH341A Programmer",
            description: "A low-cost USB-based tool used for programming and reading data from various EEPROM and flash memory chips, including BIOS chips in computers",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0LCJwdXIiOiJibG9iX2lkIn19--0a9efe4591d011f60b83ba0dd6bd0750fc835e48/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/ch341.png",
            links: [
                { type: "Robucraze", url: "https://robocraze.com/products/ch341a-24-25-series-burner-chip-eeprom-bios-writer-flash-board-programmer?variant=40193185480857&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&campaignid=21590308288&adgroupid=&keyword=&device=c&gad_source=1&gad_campaignid=21586648451&gbraid=0AAAAADgHQvZ3G7aRg9nr56mm_E6wA0_Ih&gclid=CjwKCAjwx8nCBhAwEiwA_z__08k5JZ7ismovKr5W4WcDDCySnz3QOT5d9RvKKVaW_arTPWnsmOhMSRoCbcYQAvD_BwE" }
            ]
        },
        {
            id: 7,
            title: "128GB USB Drive",
            description: "Micro Center 128GB SuperSpeed USB 3.1 (Gen 1) Flash Drive, 128GB Capacity",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5OSwicHVyIjoiYmxvYl9pZCJ9fQ==--e08ec93b92124562093666af9747e2d27233b5e2/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(9)(1).png",
            links: [
                { type: "MicroCenter", url: "https://www.microcenter.com/product/658544/micro-center-128gb-superspeed-usb-31-(gen-1)-flash-drive" }
            ]
        },
        {
            id: 8,
            title: "Orpheus Pico! (preorder)",
            description: "The world's hackiest open-source microcontroller! Designed to be a drop-in open-source replacement to the Pi Pico with a ton of new features and some stylish Hack Club branding.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1OCwicHVyIjoiYmxvYl9pZCJ9fQ==--7c2b27879fd208a3e6b1d1b9d6cbf2cce80cee26/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0za_Kleki(1).png",
            links: [
                { type: "Hackclub", url: "https://orpheuspico.hackclub.com/" }
            ]
        },
        {
            id: 9,
            title: "Logic Analyzer",
            description: "USB Logic Analyze 24M 8CH, MCU ARM FPGA DSP Debug Tool. A logic analyzer is a must have tool for any serious electronics hobbyist. With a logic analyzer, it is possible to see a visual representation of the zeros and ones that are flashing between two components. ",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI4MSwicHVyIjoiYmxvYl9pZCJ9fQ==--583d93d2c0f697c624006114c457a0173e3d9493/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0zp_Kleki(1).png",
            links: [
                { type: "Robucraze", url: "https://www.google.com/shopping/product/1?lsf=seller:112336376,store:3178835932497420445&prds=pid:5724340690522313515,oid:5724340690522313515&q=Logic+Analyzer&hl=en&ei=GgBTaObnKICZseMP8oPXqA8&sts=14&lsft=gclid:CjwKCAjwx8nCBhAwEiwA_z__0yuUNmLeJ8BvpaBD4HiG4ch6GTx8n2kge28JSErMTzWZkh2A3fk4nhoCqTAQAvD_BwE" }
            ]
        },
        {
            id: 10,
            title: "Cat Printer",
            description: "A cat printer is a device that prints cat pictures on a piece of paper. It is a great way to get cats to play with your computer and learn about cats. The printer comes with a cat picture and a cat printable sheet of paper.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1LCJwdXIiOiJibG9iX2lkIn19--0ecbd280a1a5a76c26191f6ac107d2e551c399cb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z9_Kleki(1).png",
            links: [
                { type: "Flipkart", url: "https://www.flipkart.com/wifton-pocket-printer-portable-thermal-printing-machine-bluetooth-mini-picture-lable/p/itm8bb77bcece190?pid=PTIH2AYZWQTVJZZ3&lid=LSTPTIH2AYZWQTVJZZ3KHWSHA&marketplace=FLIPKART&cmpid=content_pocket-printer_8965229628_gmc" }
            ]
        },
        {
            id: 11,
            title: "Pico-8 License",
            description: "PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs. It feels like a regular console, but runs on Windows / Mac / Linux.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODQsInB1ciI6ImJsb2JfaWQifX0=--19d35b0a75a43da8864c4439318efa7b896bb3bf/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0sk_Kleki.png",
            links: [
                { type: "Pico-8", url: "https://www.lexaloffle.com/pico-8.php" }
            ]
        },
        {
            id: 12,
            title: "Allen Wrench",
            description: "NIKATTO SET OF 10 METRIC HEX KEYS 1.5MM - 10.0MM",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjQ5LCJwdXIiOiJibG9iX2lkIn19--cde005abbc6c04f722e523aa4445ab1afb408aeb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/NIKATTO-SET-METRIC-KEYS-1-5MM/dp/B0CFJL2S41" }
            ]
        },
        {
            id: 13,
            title: "Digital Calipers",
            description: "Vernier calipers with large LCD screen electronic vernier caliper thickness measuring Tool 0-6 in/0-150 mm auto off featured. (a-150mm)",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI2MSwicHVyIjoiYmxvYl9pZCJ9fQ==--b61d0b314a368d765ca8f83f9cc6c7d5c10e17dc/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0zd_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/calipers-electronic-thickness-measuring-featured/dp/B0C5T23CRV/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.NhL2_jlDadXWnVTChhpLvNTDRS84-QFHnZKpG1UjIVIgxmDqTZv8VLrUWdJ1bPs1e_9Axnsnt2vUja428FSrh25J0uaNQrnmXdvBz6vlcaNxB5cB8dMmn3jZd1gZXbVRAcl1lHMp6UTQAwghOUDZgbhL5SBjUMo8uoOZAUTILvbcXtoiW2aIHE9t7KY7Nq9rtdVaB_L1S7iDEzoUj2zLjrE1XacRQ649dBHvi5FClHoi-fBWhsGp4SwQn1q5eKChpQcKDKNkZiXDaOx3FNjTOEpqUCyT0U4KpbIa2-Kk1g8.6r9yiM5LzUfMp3QanDFYJW_mok-9FbhGAmcxT3KWtiw&dib_tag=se&keywords=digital+vernier+caliper&qid=1750270396&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=A3QDS0ZERXAPNG" }
            ]
        },
        {
            id: 14,
            title: "Voxatron License",
            description: "Voxatron is a fantasy console and collection of games made entirely out of voxels (little colourful cubes, kind of). The Alpha version comes with an arena shooter and action-adventure cartridges as well as powerful design tools to make your own voxelly games.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODYsInB1ciI6ImJsb2JfaWQifX0=--15c13f57beb81660a9e8085438e195281ba749ca/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0so_Kleki.png",
            links: [
                { type: "Pico-8", url: "https://www.lexaloffle.com/voxatron.php" }
            ]
        },
        {
            id: 15,
            title: "Sketch from msw",
            description: "A sketch from msw is a small, simple, and fun game that you can make with a few simple blocks. It's a great way to get started with programming and game making.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc5NSwicHVyIjoiYmxvYl9pZCJ9fQ==--937db7bb5d3227260b1d3a9594c6837f62c25f07/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_18_0ll_Kleki.png",
        },
        {
            id: 16,
            title: "Raspberry Pi Zero 2 W",
            description: "Raspberry Pi Zero 2 W Dvelopment Board with Quad-Core CPU, Bluetooth BLE 4.2 and Antenna",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1NSwicHVyIjoiYmxvYl9pZCJ9fQ==--3a24804392b79bb38b456e3af78e8e769b0768a7/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0z6_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Raspberry-Pi-Dvelopment-Quad-Core-Bluetooth/dp/B09PDG21LZ/ref=sr_1_1?adgrpid=157588903098&dib=eyJ2IjoiMSJ9.DJaA7ywTAcapnzWFXlMEB0sivAEOI_oO3HzjZI8OeDhKCyn5G2yKMeTL9_RkIbp33XfNTNk1vK_HBYUAa-uWWG7fzCbzyIbuGZ8bE-QNM2lWsNzDO9J8IrgoIqLoyK19r6csIjFzlzTu-nRm7hB_hOHcJVkJCpwRUDsuNHa4noe0Yks4xl8vXyUc5iO9Yb5CsxrpmtRuttnQCbpG2jPRjo7YB9mt5CQFSAoLrMV4CAE.n5F0MDuvHMAE_TETKHK_7mMalLPc2teI1s9stcl-r94&dib_tag=se&gad_source=1&hvadid=684018998864&hvdev=c&hvlocphy=9062009&hvnetw=g&hvqmt=e&hvrand=17920056577800289196&hvtargid=kwd-1518229000296&hydadcr=7723_2245809&keywords=raspberry+pi+zero+2+w+amazon&mcid=4c8e709419d43611abfa1f2251789410&qid=1750270648&sr=8-1" }
            ]
        },
        {
            id: 17,
            title: "256GB USB Drive",
            description: "Micro Center 256GB SuperSpeed USB 3.1 (Gen 1) Flash Drive, 128GB Capacity",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5NywicHVyIjoiYmxvYl9pZCJ9fQ==--59ffc4ea8faf06c10773318062acd389cc4350d8/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(8)(1).png",
            links: [
                { type: "MicroCenter", url: "https://www.microcenter.com/product/659121/micro-center-256gb-superspeed-usb-31-(gen-1)-flash-drive-purple" }
            ]
        },
        {
            id: 18,
            title: "256GB microSD card + adapter",
            description: "SanDisk Ultra 256GB microSDXC UHS-I, 150MB/s R, Memory Card, 10 Y Warranty, for Smartphones",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIzOCwicHVyIjoiYmxvYl9pZCJ9fQ==--5b87d07a3d06f62a84614015df90f7bb70a5da3b/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0yl_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/SanDisk-Ultra%C2%AE-microSDXCTM-Warranty-Smartphones/dp/B0BDYW3RN3" }
            ]
        },
        {
            id: 19,
            title: "Smolhaj",
            description: "Smolhaj is a friendly shark, you can feed her and play with her too!!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjIsInB1ciI6ImJsb2JfaWQifX0=--00ba1348ce024a234f53f2e12c6b18d70e11dd6a/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/blahaj.png",
            links: [
                { type: "IKEA", url: "https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/" }
            ]
        },
        {
            id: 20,
            title: "USB C Cable + Wall Adapter",
            description: "USB C to Lightning Cable 6FT 2Pack, iPhone Charger Fast Charging, USBC iPhone Charger, Type C iPhone Charging Cord [Apple MFi Certified] for iPhone 14 13 12 11 Pro Max Xs 8 Plus and More",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwNiwicHVyIjoiYmxvYl9pZCJ9fQ==--833a2f6bc91fce29de52042025e5227b9f75f096/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(11).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Lightning-iPhone-Charger-Charging-Certified/dp/B09LQV3ZD9?th=1" }
            ]
        },
        {
            id: 21,
            title: "Qiyi XMD XT3 speedcube",
            description: "Introducing the X-Man Tornado V3, the pinnacle of 3x3 speed cubes from QiYi. This cube combines an easy-to-learn, in-depth customization system with a famous tactile magnetic feel.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI3NiwicHVyIjoiYmxvYl9pZCJ9fQ==--7324b6b7c9162c8207aa3914079c1c724469bb37/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0zk_Kleki(1).png",
            links: [
                { type: "Cubelelo", url: "https://www.cubelelo.com/products/qiyi-x-man-tornado-v3-3x3-flagship-magnetic-core?variant=40122709966934&currency=INR&utm_source=google&utm_medium=paid&utm_campaign=18376050923&utm_content=&utm_term=&gadid=&gad_source=1&gad_campaignid=18376061726&gbraid=0AAAAACfjwtNouZTHUR4DgDRmqotCJuNss&gclid=CjwKCAjwx8nCBhAwEiwA_z__07EYzeSgEvhMcTi2sAXNRpa1BYUqry9FrzWqRKBc6W7PAB-V0GL81hoCdbEQAvD_BwE" }
            ]
        },
        {
            id: 22,
            title: "Dupont Crimping Tool Kit",
            description: "IWISS SN-28B DUPONT Terminal Ratchet Crimper 2.54mm 3.96mm (AWG28-18) 0.1-1.0MM",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwOCwicHVyIjoiYmxvYl9pZCJ9fQ==--d89d7148515c8ed4781fcd0360eb77fff2fb874f/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(12).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/IWISS-TOOLS-Terminal-Awg28-18-0-1-1-0mm/dp/B017JU20Z6" }
            ]
        },
        {
            id: 23,
            title: "Pinecil",
            description: "Pinecil is a smar soldering Iron, which can be very usefull for electrical guys.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NzQsInB1ciI6ImJsb2JfaWQifX0=--f454ae6f9c32179f3cc10e611da66dc06f73d71e/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/25835_1_kwadrat.png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/PINECIL-Smart-Mini-Portable-Soldering/dp/B096X6SG13" }
            ]
        },
        {
            id: 24,
            title: "Lexaloffle Games bundle",
            description: "You will get both Pico-8 and Voxatron",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI0NywicHVyIjoiYmxvYl9pZCJ9fQ==--7409c748031d1a9bfee961b878d850e36162f8b1/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0yx_Kleki(1).png",
            links: [
                { type: "Pico-8", url: "https://www.lexaloffle.com/games.php?page=updates" }
            ]
        },
        {
            id: 25,
            title: "Factorio",
            description: "Factorio is a construction and management simulation game developed and published by Czech studio Wube Software. ",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NDM2LCJwdXIiOiJibG9iX2lkIn19--fdd3f1a7b554207b56af742273bb2e262236f044/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_11i_Kleki(1)(1).png",
            links: [
                { type: "Factorio", url: "https://www.factorio.com/" }
            ]
        },
        {
            id: 26,
            title: "Brother Label Maker",
            description: "This handy P-touch labeller is perfect for home use. It features an easy-type QWERTY keyboard and easy-view display.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5LCJwdXIiOiJibG9iX2lkIn19--9500904f6f2cef63d58fe3ae2331da5e3b2bd97c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z6_Kleki(2)(1).png",
            links: [
                { type: "Brother Canada", url: "https://www.brother.ca/en/p/PTM95" }
            ]
        },
        {
            id: 27,
            title: "Proxmark 3",
            description: "Proxmark 3 is a hardware and software solution for security testing and penetration testing. It is based on the popular USB-to-serial converter, the CP2102 and the popular JTAG IC, the ATmega32U4.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE3LCJwdXIiOiJibG9iX2lkIn19--adff2b85256fec9d8f167085562e84aaeefccc10/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z6_Kleki(1).png",
            links: [
                { type: "Proxmark", url: "https://proxmark.com/" }
            ]
        },
        {
            id: 28,
            title: "Yubikey USB-A",
            description: "Yubico - Yubikey 5 NFC - USB-A - Two Factor Authentication Security Key, 1 MB",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5MywicHVyIjoiYmxvYl9pZCJ9fQ==--eed829f4f416a3ab5bc5ebead4b64128bbd37852/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_109_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Yubico-YubiKey-USB-Authentication-Security/dp/B07HBD71HL" }
            ]
        },
        {
            id: 29,
            title: "Waveshare 7.5inch E-Ink Display",
            description: "Low power consumption, wide viewing angle, paper-like displaying without electricity",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1MiwicHVyIjoiYmxvYl9pZCJ9fQ==--3e10d7f2dfa5e631970e557ccb73dd817f39c6ea/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0z1_Kleki(1).png",
            links: [
                { type: "Waveshare", url: "https://www.waveshare.com/7.5inch-e-paper-hat.htm" }
            ]
        },
        {
            id: 30,
            title: "Baofeng UV-5R (2 pack)",
            description: "Ham Radio Baofeng UV-5R Radio 8W Long Range UV5R Dual Band Handheld High Power 3800mAh Rechargeable Walkie Talkies Handheld Two Way Radio with Programming Cable and Earpiece for Survival Gear,2Pack",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI4OCwicHVyIjoiYmxvYl9pZCJ9fQ==--5f9965d47307d6a5f52b0d9a107bc87141645cf1/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(6)(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.com/BAOFENG-Portable-Rechargeable-Handheld-Black-2Pack/dp/B0BZ8CWQGX" }
            ]
        },
        {
            id: 31,
            title: "Yubikey USB-C",
            description: "Keep your online accounts safe from hackers with the YubiKey. Trustworthy and easy-to-use, it's your key to a safer digital world.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI4NCwicHVyIjoiYmxvYl9pZCJ9fQ==--7e8b2a67294e715b6a4b570813c858a50b047c58/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0zr_Kleki(1).png",
            links: [
                { type: "Ybico", url: "https://www.yubico.com/in/product/yubikey-5c-nfc/" }
            ]
        },
        {
            id: 32,
            title: "Min(amame) Parts Kit",
            description: "Contains everything you need to print and assemble your very own min(amame)!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTgyOCwicHVyIjoiYmxvYl9pZCJ9fQ==--17e9ad7bda00c9b46a2160d14260188277a0b7e6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_18_0mp_Kleki(1).png",
            links: [
                { type: "Headamame", url: "https://headamame.com/products/minamame-parts-kit?srsltid=AfmBOop2NrK8qJngaG2CN1bW4--ppiQu6B9eFINkUpdSwT16spcC1efM" }
            ]
        },
        {
            id: 33,
            title: "Seagate 2TB external HDD",
            description: "Needs no description!!! ",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5NSwicHVyIjoiYmxvYl9pZCJ9fQ==--a16fad8ad63907bd22e3438a6a384e2d4030ae41/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_10c_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Seagate-Expansion-2TB-External-HDD/dp/B08ZJG6TVT" }
            ]
        },
        {
            id: 34,
            title: "Logitech MX Master 3S",
            description: "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI2OCwicHVyIjoiYmxvYl9pZCJ9fQ==--c517ab404dfc5a5f21f237485b5ef76e3cc560df/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(4)(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Logitech-MX-Master-3S-Chrome-Graphite/dp/B0B11LJ69K" }
            ]
        },
        {
            id: 35,
            title: "Raspberry Pi 5",
            description: "Needs no description!!!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI0NSwicHVyIjoiYmxvYl9pZCJ9fQ==--e73e29fe5932f2f6135832b6f3d58029eb67edcf/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0yt_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Raspberry-Pi-Cortex-A76-Computer-RPI5-8GB-SINGLE/dp/B0CK2FCG1K" }
            ]
        },
        {
            id: 36,
            title: "Head(amame) Parts Kit",
            description: "DIY overear headphones, build it yourself!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTgzMCwicHVyIjoiYmxvYl9pZCJ9fQ==--7dbb576a90ee72c4863878fe771add7704a1f05c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(1).png",
            links: [
                { type: "Headamame", url: "https://headamame.com/products/minamame-parts-kit?srsltid=AfmBOop2NrK8qJngaG2CN1bW4--ppiQu6B9eFINkUpdSwT16spcC1efM" }
            ]
        },
        {
            id: 37,
            title: "Glasgow Interface Explorer",
            description: "Glasgow Interface Explorer is a tool for exploring digital interfaces, aimed at embedded developers, reverse engineers, digital archivists, electronics hobbyists, and everyone else who wants to communicate with a wide range of digital devices with high reliability and minimum hassle.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIzLCJwdXIiOiJibG9iX2lkIn19--278736c6f9f05fe0da3c2215884b1ed050414f95/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z8_Kleki(1).png",
            links: [
                { type: "Crowd Supply", url: "https://www.crowdsupply.com/1bitsquared/glasgow" }
            ]
        },
        {
            id: 38,
            title: "Logitech G Pro X Superlight",
            description: "Super high quality mouse used by your favorite gamers",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI3MCwicHVyIjoiYmxvYl9pZCJ9fQ==--ca492b1cdad11a9a85bec881591da43d659c40bb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(5)(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Logitech-Superlight-Lightweight-Programmable-Compatible/dp/B08RMZKYTL" }
            ]
        },
        {
            id: 39,
            title: "Flipper Zero",
            description: "Flipper Zero is a portable multi-tool for pentesters and geeks in a toy-like body.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6OTYsInB1ciI6ImJsb2JfaWQifX0=--355255c6559988d0ce586e089449e3280bfd4e29/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0th_Kleki.png",
            links: [
                { type: "Flipper Zero", url: "https://flipperzero.one/" }
            ]
        },
        {
            id: 40,
            title: "Cricut Explore 3",
            description: "Cricut Explore 3 Machine - DIY Machine Compatible with Matless Cutting Smart Materials | Make Custom Vinyl Decals (Cricut Explore 3 Machine)",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6OTQsInB1ciI6ImJsb2JfaWQifX0=--10fd5992b34c0141b6924231e8ddd21dfac58c69/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0td_Kleki.png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Cricut-Explore-Machine-Compatible-Materials/dp/B0942SYJHY" }
            ]
        },
        {
            id: 41,
            title: "Playdate",
            description: "Playdate is familiar, but unlike anything you've ever seen. It has a very special black and white screen – not backlit, but super reflective – that looks way more amazing than you're probably imagining.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMxMiwicHVyIjoiYmxvYl9pZCJ9fQ==--b0ed0cea0ae08def158a81c2ad01c08018ad0062/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(13).png",
            links: [
                { type: "Playdate", url: "https://play.date/" }
            ]
        },
        {
            id: 42,
            title: "Bambu A1 mini Printer",
            description: "A1 handles various calibrations all by itself. It meticulously calibrates the Z-offset, bed-level, vibration resonance and nozzle pressure for EVERY print job, automatically.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI0MywicHVyIjoiYmxvYl9pZCJ9fQ==--f136ab48ddb5e95bbe0bcebb072538823ab3db7c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0yp_Kleki(1).png",
            links: [
                { type: "Bamboo Labs", url: "https://bambulab.com/en-in/a1" }
            ]
        },
        {
            id: 43,
            title: "100MHZ Oscilloscope",
            description: "Siglent SDS1102CML+ !!!! Maybe you can fix your laptop with it...",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5MSwicHVyIjoiYmxvYl9pZCJ9fQ==--02d62e53c70047d002bb362949d97ca3acef316a/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_102_Kleki(1).png",
            links: [
                { type: "Amazon", url: "https://www.amazon.in/Siglent-Technologies-SDS1102CML-Digital-Oscilloscope/dp/B01J1MQC3G" }
            ]
        },
        {
            id: 44,
            title: "$500 in Amp credit",
            description: "Use the agent a good chunk of this platform was made with!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzUzLCJwdXIiOiJibG9iX2lkIn19--6bedffa7d05e68bc89259aab22a4fe92e76547a3/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_0wu_Kleki(1).png",
            links: [
                { type: "Amp", url: "https://amp.dev/index-2021" }
            ]
        },
        {
            id: 45,
            title: "iPad + Apple Pencil",
            description: "My dream!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjM5LCJwdXIiOiJibG9iX2lkIn19--00b9312b1ea065d925f83ad3b53d6684eff483f4/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_0qh_Kleki(1).png",
            links: [
                { type: "Apple", url: "https://www.apple.com/ipad/" }
            ]
        },
        {
            id: 46,
            title: "M4 Mac Mini",
            description: "Most powerfull which go supa fast.",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjM3LCJwdXIiOiJibG9iX2lkIn19--bc2fa2433f9429b9acf2ce6b02c8bda77764831a/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_0qf_Kleki(1).png",
            links: [
                { type: "Apple", url: "https://www.apple.com/shop/buy-mac/mac-mini/m4" }
            ]
        },
        {
            id: 47,
            title: "Framework 12",
            description: "What is this?",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTEzLCJwdXIiOiJibG9iX2lkIn19--4b6964013a58e4eb9b129ef870b53dfc43c589ca/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z4_Kleki(1).png",
            links: [
                { type: "Framework", url: "https://frame-work.webpkgcache.com/doc/-/s/frame.work/laptop12?srsltid=AfmBOopGI7d7ADQxmCftGYb-xVj9V8iHH-KBvCchH6CAicaeS466bCpT" }
            ]
        },
        {
            id: 48,
            title: "13-inch M4 MacBook Air",
            description: "16GB of memory and 256GB SSD, all in a lightweight form factor!",
            image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzU3LCJwdXIiOiJibG9iX2lkIn19--7635fc44dcf5e0697741c52c560e5310aa256b4a/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_16_0x0_Kleki.png",
            links: [
                { type: "Apple", url: "https://www.apple.com/shop/buy-mac/macbook-air/13-inch" }
            ]
        }
    ];

    return (
        <>
            <div className='hero-main'>
                {items_object.map((item) => (<div className='main-item-card'>
                    <img height={200} width={200} src={item.image} alt='summer.hackclub.com is currently down'></img>
                    <p style={{ marginBottom: "0px" }}>{item.title}</p>
                    <p style={{ textAlign: "justify", lineHeight: "25px" }}>{item.description}</p>
                    {item.links && <div className='main-item-buy-button' onClick={() => window.open(item.links[0].url, "_blank")}><ShoppingCart size={15} /></div>}
                </div>
                ))};

                {/* <div className='main-item-card'>
                    <img height={200} width={200} src='https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODQwLCJwdXIiOiJibG9iX2lkIn19--bd312986c11cc5f624b518ac02e0c3b77a16665b/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0i4_Kleki(1).png'></img>
                    <p style={{ marginBottom: "0px" }}>Pile of Stickers</p>
                    <p>This is the description of the item, and below it will be some buttons for amazon and other stores</p>
                </div>
                <div className='main-item-card'>
                    <img height={200} width={200} src='https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--1a97fe9d21262424129d5fbe90b3128468c08857/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_10l_Kleki-removebg-preview(1).png'></img>
                    <p style={{ marginBottom: "0px" }}>Pile of Stickers</p>
                    <p>This is the description of the item, and below it will be some buttons for amazon and other stores</p>
                    <div className='main-item-buy-button'><ShoppingCart size={15} /></div>
                </div> */}
            </div>

        </>
    );
}

export default Hero;
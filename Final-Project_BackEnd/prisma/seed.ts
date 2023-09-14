import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(): Promise<void> {

    await prisma.order_item.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.package_all_photos.deleteMany();
    await prisma.package_item.deleteMany();
    await prisma.packages.deleteMany();
    await prisma.single_item_all_photos.deleteMany();
    await prisma.single_item.deleteMany();
    await prisma.orders.deleteMany();
    await prisma.official_camp_site.deleteMany();
    await prisma.message.deleteMany();
    await prisma.chatroom.deleteMany();
    await prisma.users.deleteMany();
    await prisma.notification.deleteMany();

    await prisma.$queryRaw`ALTER SEQUENCE "notification_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "users_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "chatroom_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "message_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "official_camp_site_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "orders_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "single_item_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "single_item_all_photos_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "packages_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "package_item_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "package_all_photos_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "cart_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE "order_item_id_seq" RESTART WITH 1;`


    await prisma.users.createMany({
        data: [
            {
                username: "Chrysan",
                password: "123456",
                email: "chrysan.chan.hk@gmail.com",
                profile_pic: "abc.jpg"
            },
            {
                username: "Newton",
                password: "123456",
                email: "nl26598@gmail.com",
                profile_pic: "xyz.jpg"
            },
            {
                username: "James",
                password: "123456",
                email: "james@gmail.com",
                profile_pic: "xyz.jpg"
            }
        ]
    })

    await prisma.chatroom.createMany({
        data: [
            {
                admin_id: 1,
                sender_id: 2,
            },
            {
                admin_id: 1,
                sender_id: 3,
            },
        ]
    })

    await prisma.message.createMany({
        data: [
            {
                chatroom_id: 2,
                admin_id: 1,
                sender_id: 3,
                content: "Hi, I am James",
                is_sender_msg: true
            },
            {
                chatroom_id: 2,
                admin_id: 1,
                sender_id: 3,
                content: "Hello, I am admin",
                is_sender_msg: false
            },
        ]
    })


    await prisma.single_item.createMany({
        data: [{
            type_name: "Accessories",
            description: "10L Water Bag",
            details: "Water Bag",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/10l+water+bag.jpg",
            price: 10,
        }, {
            type_name: "Accessories",
            description: "28L Vacuum Fridge",
            details: "Camping Vacuum Box 28L: It can store around 30 bottles of water and it's a CUP HOLDER when you turn around the Fridge Lip. Weight: 3.9kg Outer: 430x340x425mm Inside: 370x250x340mm  ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+1.jpg",
            price: 95
        },
        {
            type_name: "Accessories",
            description: "Claymore V600 Wireless Rechargeable Multi Fan",
            details: "Claymore V600 can roll upwards and downwards for 45 degrees which can also hang inside or outside the tent. It can increase fan speed by pressing button from 1 to 4. I can also set stop time by pressing the timing button.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+1.jpg",
            price: 50,

        }, {
            type_name: "Accessories",
            description: "Lighter",
            details: "It helps lighting fire for camping which just press the button.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/lighter.jpg",
            price: 10,

        }, {
            type_name: "Accessories",
            description: "V02 USB 2Way Lamp and Fan",
            details: "It's a little lamp with soft yellow light which can use for 48 hours and a fan at the same time which can use for 10 hours. 3 class of fan speed could be chosen and can hang inside or outside the tent.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/v02+usb+2way+lamp+and+fan1.jpg",
            price: 30,

        }, {
            type_name: "Air Pillows",
            description: "Costume Style Air Pillow Blue",
            details: "Sponge inside which could self inflating. Four colors with Size: 47x30x10.5cm ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",
            price: 20,
        }, {
            type_name: "Air Pillows",
            description: "Costume Style Air Pillow Green",
            details: "Sponge inside which could self inflating. Four colors with Size: 47x30x10.5cm ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greygreen1.jpg",
            price: 20,

        }, {
            type_name: "Air Pillows",
            description: "Costume Style Air Pillow Grey Yellow",
            details: "Sponge inside which could self inflating. Four colors with Size: 47x30x10.5cm ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greyyello1.jpg",
            price: 20,

        }, {
            type_name: "Air Pillows",
            description: "Costume Style Air Pillow Yellow",
            details: "Sponge inside which could self inflating. Four colors with Size: 47x30x10.5cm ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+yellow1.jpg",
            price: 20,

        }, {
            type_name: "Air Pillows",
            description: "Light Tour Camp Air Pillow Blue",
            details: "Size: 36x20x8cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/light+tour+camp+pillow1.jpg",
            price: 20,

        }, {
            type_name: "Cooking Utensils",
            description: "Arisu Casting Griddle IH Induction Compatible 25cm",
            details: "Made in Korea with Inoble and Oil Road. Size: 25x30x0.43cm Weight: 600g",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+25cm1.jpg",
            price: 30,

        }, {
            type_name: "Cooking Utensils",
            description: "Arisu Casting Griddle IH Induction Compatible 29cm",
            details: "Made in Korea with Inoble and Oil Road. Size: 29x34x0.43cm Weight: 840g",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+29cm1.jpg",
            price: 40,

        }, {
            type_name: "Cooking Utensils",
            description: "Arisu Casting Griddle IH Induction Compatible 33cm",
            details: "Made in Korea with Inoble and Oil Road. Size: 33x40x0.43cm Weight: 980g",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm1.jpg",
            price: 50,

        }, {
            type_name: "Cooking Utensils",
            description: "Fire Maple FMC 206 Cookware",
            details: "Made of aluminum with hard anodized surface ,which is fire resistant and wear resisting ,easy to cleaning.The cutleries are made of PP material. For 4 to 5 peoples auto driving.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_1.jpg",
            price: 50,

        }, {
            type_name: "Cooking Utensils",
            description: "Nature Hike Four Piece Hiking Camping Cooking Set",
            details: "Imported aluminum alloy, lightweight and portable, suitable for 2 to 3 people, anti slip handle, with cleaning sponge.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_1.jpg",
            price: 50,

        }, {
            type_name: "Cooking Utensils",
            description: "Snowline HA Cook Set 2 to 3 Persons Assort",
            details: "Made in Korea. Size: 1.2L in 14x8cm, 2L in 16x10cm, 16.5x4cm Together with 3 plastic bowls, 1 soup spoons, 1 rice spoon, 1 small lid and 1 large lid",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/snowline+ha+cook+set+2+or+3+assort_1.jpg",
            price: 50,

        }, {
            type_name: "Cooking Utensils",
            description: "Solo Picnic Set",
            details: "All simple cooking utensils are included in one set. ",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set1.jpg",
            price: 40,

        }, {
            type_name: "Cooking Utensils",
            description: "Stainless Steel Kettle 6pc Set for 2 persons",
            details: "6 piece pots for 2 to 3 persons with stainless steel and folding handles. They can be stacked for storage. Set includes a frying pan in 15x4cm, 2 water cups in 7.5x7cm, 2 plates in 13.7x1.9cm and a big pot in 14.7x6.8cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/stainless+steel+kettle+6pc+set+_2p1.jpg",
            price: 40,

        }, {
            type_name: "Furniture",
            description: "Folding Table With Aluminum Surface Large",
            details: "Size: 68x46.5x40cm, Weight 1.5kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/folding+table+with+aluminum+surface_large1.jpg",
            price: 50,

        }, {
            type_name: "Furniture",
            description: "Nature Hike Alloy Ultra Light Foldable Table Large",
            details: "Size: 36.5x69.7x36cm Weight: 1480g",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large1.jpg",
            price: 50,

        }, {
            type_name: "Furniture",
            description: "Nature Hike Alloy Ultra Light Foldable Table Small",
            details: "Size: 36.5x36.5.7x36cm Weight: 1480g",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_small1.jpg",
            price: 40
        }, {
            type_name: "Furniture",
            description: "One Touch Folding Chair Blue",
            details: "Size: 27x22.5x24.8cm Easy folding with one touch, very convenient for outdoor activities like camping",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_blue1.jpg",
            price: 20,

        }, {
            type_name: "Furniture",
            description: "One Touch Folding Chair Red",
            details: "Size: 27x22.5x24.8cm Easy folding with one touch, very convenient for outdoor activities like camping",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_red1.jpg",
            price: 20,

        }, {
            type_name: "Furniture",
            description: "Shinetrip Folding Table With Aluminum Surface Middle",
            details: "Size: 46.5x40.5x56cm Convenient folding type Weight: 1.3kg Can hold maximum 25kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_m1.jpg",
            price: 50,

        }, {
            type_name: "Furniture",
            description: "Shinetrip Folding Table With Aluminum Surface Small",
            details: "Size: 30x35x41cm Convenient folding type Weight: 0.8kg Can hold maximum 25kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_s1.jpg",
            price: 30
        }, {
            type_name: "Furniture",
            description: "Snowline Cube Carbon Table L5",
            details: "Size: 66x35x32.5cm with Carbon Surface which could have a holding mat under table that's very convenient for storage",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+carbon+table+l5+1.jpg",
            price: 60
        }, {
            type_name: "Furniture",
            description: "Snowline Cube Table L6",
            details: "Size: 78.5x35x32.5cm with Carbon Surface which can merge together in different shape",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+1.jpg",
            price: 70
        }, {
            type_name: "Furniture",
            description: "Snowline Lasse Light Chair Brown",
            details: "Size: 65x50x46x30cm Made in Korea",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+brown1.jpg",
            price: 50,

        }, {
            type_name: "Furniture",
            description: "Snowline Lasse Light Chair Grey",
            details: "Size: 65x50x46x30cm Made in Korea",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",
            price: 50,

        }, {
            type_name: "Furniture",
            description: "Snowline Pender Chair Wide Black",
            details: "Size: 64x88x95cm Convenient and Comfortable type in Light Weight Chair with wide pad",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_black1.jpg",
            price: 60
        }, {
            type_name: "Furniture",
            description: "Snowline Pender Chair Wide Red",
            details: "Size: 64x88x95cm Convenient and Comfortable type in Light Weight Chair with wide pad",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_red1.jpg",
            price: 60
        }, {
            type_name: "Lighting Supplies",
            description: "Classic LED Lamp Black",
            details: "Can choose yellow or white light. Can use USB or battery",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",
            price: 20,

        }, {
            type_name: "Lighting Supplies",
            description: "Classic LED Lamp Bronze",
            details: "Can choose yellow or white light. Can use USB or battery",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_bronze1.jpg",
            price: 20,

        }, {
            type_name: "Lighting Supplies",
            description: "Classic LED Lamp Red",
            details: "Can choose yellow or white light. Can use USB or battery",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_red1.jpg",
            price: 20,

        }, {
            type_name: "Lighting Supplies",
            description: "LUMENA M3 LED Light",
            details: "LG Li ion 3.63V 3,250mAh 11.7Wh Size: 3.4x3.4x10.2cm Can use for 7 to 200 hours Weight: 95g LED Temperature: 3000K / 4000K",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light1.jpg",
            price: 50,

        }, {
            type_name: "Lighting Supplies",
            description: "Mosquito Killing Lamp",
            details: "Size: 8.5x8.5x13.6cm UV395nm in 30 meters effective area with 3 lighting mode",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp1.jpg",
            price: 30,

        }, {
            type_name: "Lighting Supplies",
            description: "Nature Hike 3A Battery LED Magnetic Camp Lamp Blue",
            details: "Three block cycle switch lamp lumens, bottom buckle design is easy to hang, containing magnetic can be effectively adsorbed on the metal part.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_blue1.jpg",
            price: 15
        }, {
            type_name: "Lighting Supplies",
            description: "Nature Hike 3A Battery LED Magnetic Camp Lamp Orange",
            details: "Three block cycle switch lamp lumens, bottom buckle design is easy to hang, containing magnetic can be effectively adsorbed on the metal part.",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange1.jpg",
            price: 15
        }, {
            type_name: "Lighting Supplies",
            description: "Snow Peak Little Lamp Nocturne GL 140",
            details: "Bringing some romance back to outdoor lighting with camping gas and Using only 7g of fuel per hour, it can burn up the remainder of your old fuel canister for an evening of ambience",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/snow+peak+little+lamp+nocturne+gl_140+1.jpg",
            price: 70,

        }, {
            type_name: "Lighting Supplies",
            description: "Suboos 8510 A2",
            details: "Material: ABS Built in strong magnetic, power bank Battery: Fixed in 3600mAh polymer lithium Weight: 147g Waterproof: IPX5 Finished by rubber paint",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+1.jpg",
            price: 20,

        }, {
            type_name: "Shelters",
            description: "Nature Hike Sunrise Hexagonal Tarps",
            details: "Lightweight and two ways to easy build; small storage with six wind ropes,windproof and stable, waterproof fabric, sunscreen UPF40. Size: 520x460cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+1.jpg",
            price: 80,

        }, {
            type_name: "Shelters",
            description: "NatureHike Gnie Shelter",
            details: "The tent is made of 210T 63D Plain polyester fabric to make its waterproof index above 1000mm, rainproof, wind-proof, chill-proof and breathable. Size: 355x284cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/naturehike+gnie+shelter1.jpg",
            price: 200,

        }, {
            type_name: "Shelters",
            description: "vidalido shelter_large",
            details: "UV-resistant and waterproofing materials. Size: 560x550cm, Weight: 2.2kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_large1.jpg",
            price: 200,

        }, {
            type_name: "Shelters",
            description: "vidalido shelter_medium",
            details: "UV-resistant and waterproofing materials. Size: 500x470cm, Weight: 1.9kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_medium1.jpg",
            price: 150,

        }, {
            type_name: "Shelters",
            description: "vidalido shelter_small",
            details: "UV-resistant and waterproofing materials. Size: 360x420cm, Weight: 1.15kg",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_small1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Double Sleeping Bags Blue",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 1850x700mm / 2150x700mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+b1.jpg",
            price: 120,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Double Sleeping Bags Green",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 1850x700mm / 2150x700mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+g1.jpg",
            price: 120,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Double Sleeping Bags Orange",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 1850x700mm / 2150x700mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+o1.jpg",
            price: 120,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Envelope Style Sleeping Bag With Hood U350 Blue",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 2200x750mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+envelope+style+sleeping+bag+with+hood+u350+b1.jpg",
            price: 70,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Envelope Style Sleeping Bag With Hood U350 Green",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 2200x750mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+G1.jpg",
            price: 70,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Envelope Style Sleeping Bag With Hood U350 Orange",
            details: "Fabric with coated surface treatment, breathable and waterproof, optimize breathability and thermal effects. Size: 2200x750mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",
            price: 70,

        }, {
            type_name: "Sleeping Bags",
            description: "Nature Hike Mini Ultralight Sleeping Bag",
            details: "Lightweight breathable fabric, soft and comfortable, suitable for early summer, summer and early autumn. Size: 2050x850mm / 1900x750mm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Mini+Ultralight+Sleeping+Bag+1.jpg",
            price: 70,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Blue",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Brown",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+brown1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Dark Blue",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+darkblue1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Green",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+green1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Orange",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+orange1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Big Sand Brown",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 208x136x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+sandbrown1.jpg",
            price: 100,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Blue",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+blue1.jpg",
            price: 50,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Dark Blue",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+darkblue1.jpg",
            price: 50,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Dessert",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+desert1.jpg",
            price: 50,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Forest Brown",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+forest_green1.jpg",
            price: 50,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Leaf Brown",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+leaf_brown1.jpg",
            price: 50,

        }, {
            type_name: "Sleeping Pads",
            description: "Etrol Sleep Mat Small Orange",
            details: "Made of tear-resistant and non-leaking camping material and features a super waterproof TPU layer that protects you from wet ground in the most extreme conditions. Size: 195x70x12cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+orange1.jpg",
            price: 50,

        }, {
            type_name: "Stoves",
            description: "Kovea Expedition Camp Stove",
            details: "High efficiency split type gas fuel furnace, Ignition: electronic ignition, Fuel: Alpine Gas/Side Furnace Cassette Gas",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/kovea+expedition+camp+stove.jpg",
            price: 50,

        }, {
            type_name: "Stoves",
            description: "Kovea Maximum Stove",
            details: "Lightweight and efficient, ,works only using Butine long barrel cylinder gas",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/kovea+maximum+stove.jpg",
            price: 50,
        }, {
            type_name: "Stoves",
            description: "Snowline Fire Boom Stove Dark",
            details: "Korean made Electronic automatic ignition, works only using Butine",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+dark.jpg",
            price: 50,

        }, {
            type_name: "Stoves",
            description: "Snowline Fire Boom Stove Orange",
            details: "Korean made Electronic automatic ignition, works only using Butine",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+orange.jpg",
            price: 50,

        }, {
            type_name: "Stoves",
            description: "Soto Amicus Stove",
            details: "Light weight, compact and shock resistant with improved ignition",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/soto+amicus+stove.jpg",
            price: 50,

        }, {
            type_name: "Stoves",
            description: "Stove St_310 Regulator Stove",
            details: "Piezoelectric and electric wires built-in for shock resistance, high output at any time without being affected by the pressure drop inside the cylinder due to coldness",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/soto+st_310+regulator+stove.jpg",
            price: 50,

        }, {
            type_name: "Tents",
            description: "3F UL GEAR 2 Person Ultralight Camping Tent 2P",
            details: "Scientific skeleton structure, double Y-shaped pole, easy to build and stand on its own. Interior space: 210x130x200cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P1.jpg",
            price: 250,

        }, {
            type_name: "Tents",
            description: "QUECHUA Camping tent MH100 3P",
            details: "Waterproof, east setup and spacious tent which is available for 3 person. Interior space: 210x195x120cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/QUECHUA+Camping+tent+MH100+3P1.jpg",
            price: 150,

        }, {
            type_name: "Tents",
            description: "FORCLAZ Trekking 3 Seasons Freestanding 3P",
            details: "A simple & practical, lightweight & compact tent that offers good habitability for 3 people. Interior space: 220x180x119cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P1.jpg",
            price: 250,

        }, {
            type_name: "Tents",
            description: "MSR Elixir 3 Backpacking Tent 3P",
            details: "Provides ventilation, warmth and privacy, with plenty of headroom and space for 3 adults. Interior space: 213x172x104cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P1.jpg",
            price: 300,

        }, {
            type_name: "Tents",
            description: "Nature Hike Cycling Ultralight Silicone One Man Tent 2P",
            details: "Reasonably lightweight (1.3kg with pegs and poles), waterproof material, very well ventilated. Interior space: 205x95x110cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Cycling+Ultralight+Silicone+One+Man+Tent+2P1.jpg",
            price: 300,

        }, {
            type_name: "Tents",
            description: "Nature Hike Knight 3 Tent 3P",
            details: "Provides excellent ventilation and even works well under heavy rain and snow. Interior space: 205x180x125cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Knight+3+Tent+3P1.jpg",
            price: 200,

        }, {
            type_name: "Tents",
            description: "Nature Hike Mongar Ultralight Two Men Tent 2P",
            details: "Mongar uses two tent 7001 aluminum alloy poles to form its skeleton and 20D Nylon coated silicon rainfly, provides a high degree of comfort and safety. Interior space: 210x135x100cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Mongar+Ultralight+Two+Men+Tent+2P1.jpg",
            price: 200,

        }, {
            type_name: "Tents",
            description: "Nemo Aurora Backpacking Tent 1p",
            details: "Light backpacking tent has great ventilation, competitive price and easy setup. Interior space: 223.5x132x112cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p1.jpg",
            price: 250,

        }, {
            type_name: "Tents",
            description: "VIDALIDO 2 to 4P Pyramid Tent",
            details: "VIDALIDO has great ventilation, accommodates 4 people and is easy yo set up. Interior space: 240x210x200cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/VIDALIDO+2+to+4P+Pyramid+Tent+4P1.jpg",
            price: 250,

        }, {
            type_name: "Tents",
            description: "DOD One Pole Tent 5P",
            details: "It has a simple structure, lightweight with a stylish appearance which fits for festival occasions. Interior space: 370x325x200cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P1.jpg",
            price: 250,

        }, {
            type_name: "Tents",
            description: "Snowline New Camp Tent 4P",
            details: "A tent which is easy to set up, with high ventilation and suitable for 3 person. Interior space: 210x210x120cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Snowline+New+Camp+Tent++4P1.jpg",
            price: 300,

        }, {
            type_name: "Tents",
            description: "Luxe Outdoor Astron 33",
            details: "A simple & practical, lightweight & compact tent that offers good habitability for 3 people. Interior space: 230x170x105cm",
            photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Luxe+Outdoor+Astron+33P1.jpg",
            price: 300,

        },
        ]
    })

    await prisma.single_item_all_photos.createMany({
        data: [
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/10l+water+bag.jpg",
                single_item_id: 1
            }, {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+1.jpg",
                single_item_id: 2
            }, {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+2.jpg",
                single_item_id: 2
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+3.jpg",
                single_item_id: 2
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+4.jpg",
                single_item_id: 2
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+5.jpg",
                single_item_id: 2
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+1.jpg",
                single_item_id: 3
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+2.jpg",
                single_item_id: 3
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+3.jpg",
                single_item_id: 3
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+4.jpg",
                single_item_id: 3
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/lighter.jpg",
                single_item_id: 4
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/v02+usb+2way+lamp+and+fan1.jpg",
                single_item_id: 5
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/v02+usb+2way+lamp+and+fan2.jpg",
                single_item_id: 5
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",
                single_item_id: 6
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue2.jpg",
                single_item_id: 6
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greygreen1.jpg",
                single_item_id: 7
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greygreen2.jpg",
                single_item_id: 7
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greyyello1.jpg",
                single_item_id: 8
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greyyellow2.jpg",
                single_item_id: 8
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+greyyellow3.jpg",
                single_item_id: 8
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+yellow1.jpg",
                single_item_id: 9
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+yellow2.jpg.jpg",
                single_item_id: 9
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/light+tour+camp+pillow1.jpg",
                single_item_id: 10
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/light+tour+camp+pillow2.jpg",
                single_item_id: 10
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+25cm1.jpg",
                single_item_id: 11
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+25cm2.jpg",
                single_item_id: 11
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+25cm3.jpg",
                single_item_id: 11
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+25cm4.jpg",
                single_item_id: 11
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+29cm1.jpg",
                single_item_id: 12
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+29cm2.jpg",
                single_item_id: 12
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+29cm3.jpg",
                single_item_id: 12
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+29cm4.jpg",
                single_item_id: 12
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm1.jpg",
                single_item_id: 13
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm2.jpg",
                single_item_id: 13
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm3.jpg",
                single_item_id: 13
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm4.jpg",
                single_item_id: 13
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_1.jpg",
                single_item_id: 14
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_2.jpg",
                single_item_id: 14
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_3.jpg",
                single_item_id: 14
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_4.jpg",
                single_item_id: 14
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_1.jpg",
                single_item_id: 15
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_2.jpg",
                single_item_id: 15
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_3.jpg",
                single_item_id: 15
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_4.jpg",
                single_item_id: 15
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/nature+hike+four_piece+hiking+camping+Cooking+set_5.jpg",
                single_item_id: 15
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/snowline+ha+cook+set+2+or+3+assort_1.jpg",
                single_item_id: 16
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/snowline+ha+cook+set+2+or+3+assort_2.jpg",
                single_item_id: 16
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/snowline+ha+cook+set+2+or+3+assort_3.jpg",
                single_item_id: 16
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set1.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set2.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set3.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set4.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set5.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set6.jpg",
                single_item_id: 17
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/stainless+steel+kettle+6pc+set+_2p1.jpg",
                single_item_id: 18
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/stainless+steel+kettle+6pc+set+_2p2.jpg",
                single_item_id: 18
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/stainless+steel+kettle+6pc+set+_2p3.jpg",
                single_item_id: 18
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/folding+table+with+aluminum+surface_large1.jpg",
                single_item_id: 19
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/folding+table+with+aluminum+surface_large2.jpg",
                single_item_id: 19
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/folding+table+with+aluminum+surface_large3.jpg",
                single_item_id: 19
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/folding+table+with+aluminum+surface_large4.jpg",
                single_item_id: 19
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large1.jpg",
                single_item_id: 20
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large2.jpg",
                single_item_id: 20
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large3.jpg",
                single_item_id: 20
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large4.jpg",
                single_item_id: 20
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_small1.jpg",
                single_item_id: 21
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_small2.jpg",
                single_item_id: 21
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_small3.jpg",
                single_item_id: 21
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_blue1.jpg",
                single_item_id: 22
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_blue2.jpg",
                single_item_id: 22
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_red1.jpg",
                single_item_id: 23
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_red2.jpg",
                single_item_id: 23
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/one+touch+folding+chair_red3.jpg",
                single_item_id: 23
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_m1.jpg",
                single_item_id: 24
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_m2.jpg",
                single_item_id: 24
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_m3.jpg",
                single_item_id: 24
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_s1.jpg",
                single_item_id: 25
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_s2.jpg",
                single_item_id: 25
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/shinetrip+folding+table+with+aluminum+surface_s3.jpg",
                single_item_id: 25
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+carbon+table+l5+1.jpg",
                single_item_id: 26
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+carbon+table+l5+2.jpg",
                single_item_id: 26
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+carbon+table+l5+3.jpg",
                single_item_id: 26
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+1.jpg",
                single_item_id: 27
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+2.jpg",
                single_item_id: 27
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+3.jpg",
                single_item_id: 27
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+4.jpg",
                single_item_id: 27
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+brown1.jpg",
                single_item_id: 28
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+brown2.jpg",
                single_item_id: 28
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",
                single_item_id: 29
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey2.jpg",
                single_item_id: 29
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_black1.jpg",
                single_item_id: 30
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_black2.jpg",
                single_item_id: 30
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_black3.jpg",
                single_item_id: 30
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_red1.jpg",
                single_item_id: 31
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_red2.jpg",
                single_item_id: 31
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_red3.jpg",
                single_item_id: 31
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+pender+chair+wide_red4.jpg",
                single_item_id: 31
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",
                single_item_id: 32
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black2.jpg",
                single_item_id: 32
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black3.jpg",
                single_item_id: 32
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_bronze1.jpg",
                single_item_id: 33
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_bronze2.jpg",
                single_item_id: 33
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_bronze3.jpg",
                single_item_id: 33
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_red1.jpg",
                single_item_id: 34
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_red2.jpg",
                single_item_id: 34
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_red3.jpg",
                single_item_id: 34
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light1.jpg",
                single_item_id: 35
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light2.jpg",
                single_item_id: 35
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light3.jpg",
                single_item_id: 35
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light4.jpg",
                single_item_id: 35
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/LUMENA+M3+LED+Light5.jpg",
                single_item_id: 35
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp1.jpg",
                single_item_id: 36
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp2.jpg",
                single_item_id: 36
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp3.jpg",
                single_item_id: 36
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp4.jpg",
                single_item_id: 36
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_blue1.jpg",
                single_item_id: 37
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_blue2.jpg",
                single_item_id: 37
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_blue3.jpg",
                single_item_id: 37
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange1.jpg",
                single_item_id: 38
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange2.jpg",
                single_item_id: 38
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange3.jpg",
                single_item_id: 38
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange4.jpg",
                single_item_id: 38
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/nature+hike+3a+battery+led+magnetic+camp+lamp_orange5.jpg",
                single_item_id: 38
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/snow+peak+little+lamp+nocturne+gl_140+1.jpg",
                single_item_id: 39
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/snow+peak+little+lamp+nocturne+gl_140+2.jpg",
                single_item_id: 39
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/snow+peak+little+lamp+nocturne+gl_140+3.jpg",
                single_item_id: 39
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+1.jpg",
                single_item_id: 40
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+2.jpg",
                single_item_id: 40
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+3.jpg",
                single_item_id: 40
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+4.jpg",
                single_item_id: 40
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/Suboos+8510+A2+5.jpg",
                single_item_id: 40
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+1.jpg",
                single_item_id: 41
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+2.jpg",
                single_item_id: 41
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+3.jpg",
                single_item_id: 41
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+4.jpg",
                single_item_id: 41
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/nature+hike+sunrise+hexagonal+tarps+5.jpg",
                single_item_id: 41
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/naturehike+gnie+shelter1.jpg",
                single_item_id: 42
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/naturehike+gnie+shelter2.jpg",
                single_item_id: 42
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/naturehike+gnie+shelter3.jpg",
                single_item_id: 42
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_large1.jpg",
                single_item_id: 43
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_large2.jpg",
                single_item_id: 43
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_medium1.jpg",
                single_item_id: 44
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_medium2.jpg",
                single_item_id: 44
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_small1.jpg",
                single_item_id: 45
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_small2.jpg",
                single_item_id: 45
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+b1.jpg",
                single_item_id: 46
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+b2.jpg",
                single_item_id: 46
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+g1.jpg",
                single_item_id: 47
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+g2.jpg",
                single_item_id: 47
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+g3.jpg",
                single_item_id: 47
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+o1.jpg",
                single_item_id: 48
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+double+sleeping+bags+o2.jpg",
                single_item_id: 48
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+envelope+style+sleeping+bag+with+hood+u350+b1.jpg",
                single_item_id: 49
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+envelope+style+sleeping+bag+with+hood+u350+b2.jpg",
                single_item_id: 49
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+envelope+style+sleeping+bag+with+hood+u350+b3.jpg",
                single_item_id: 49
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/nature+hike+envelope+style+sleeping+bag+with+hood+u350+b4.jpg",
                single_item_id: 49
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+G1.jpg",
                single_item_id: 50
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+G2.jpg",
                single_item_id: 50
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+G3.jpg",
                single_item_id: 50
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",
                single_item_id: 51
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O2.jpg",
                single_item_id: 51
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O3.jpg",
                single_item_id: 51
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O4.jpg",
                single_item_id: 51
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Mini+Ultralight+Sleeping+Bag+1.jpg",
                single_item_id: 52
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Mini+Ultralight+Sleeping+Bag+2.jpg",
                single_item_id: 52
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Mini+Ultralight+Sleeping+Bag+3.jpg",
                single_item_id: 52
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",
                single_item_id: 53
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue2.jpg",
                single_item_id: 53
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue3.jpg",
                single_item_id: 53
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+brown1.jpg",
                single_item_id: 54
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+brown2.jpg",
                single_item_id: 54
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+brown3.jpg",
                single_item_id: 54
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+darkblue1.jpg",
                single_item_id: 55
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+darkblue2.jpg",
                single_item_id: 55
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+darkblue3.jpg",
                single_item_id: 55
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+green1.jpg",
                single_item_id: 56
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+green2.jpg",
                single_item_id: 56
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+green3.jpg",
                single_item_id: 56
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+orange1.jpg",
                single_item_id: 57
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+orange2.jpg",
                single_item_id: 57
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+orange3.jpg",
                single_item_id: 57
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+sandbrown1.jpg",
                single_item_id: 58
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+sandbrown2.jpg",
                single_item_id: 58
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+sandbrown3.jpg",
                single_item_id: 58
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+blue1.jpg",
                single_item_id: 59
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+blue2.jpg",
                single_item_id: 59
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+blue3.jpg",
                single_item_id: 59
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+darkblue1.jpg",
                single_item_id: 60
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+darkblue2.jpg",
                single_item_id: 60
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+darkblue3.jpg",
                single_item_id: 60
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+desert1.jpg",
                single_item_id: 61
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+desert2.jpg",
                single_item_id: 61
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+desert3.jpg",
                single_item_id: 61
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+forest_green1.jpg",
                single_item_id: 62
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+forest_green2.jpg",
                single_item_id: 62
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+forest_green3.jpg",
                single_item_id: 62
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+leaf_brown1.jpg",
                single_item_id: 63
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+leaf_brown2.jpg",
                single_item_id: 63
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+leaf_brown3.jpg",
                single_item_id: 63
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+orange1.jpg",
                single_item_id: 64
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+orange2.jpg",
                single_item_id: 64
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+small+orange3.jpg",
                single_item_id: 64
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/kovea+expedition+camp+stove.jpg",
                single_item_id: 65
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/kovea+maximum+stove.jpg",
                single_item_id: 66
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+dark.jpg",
                single_item_id: 67
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+orange.jpg",
                single_item_id: 68
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/soto+amicus+stove.jpg",
                single_item_id: 69
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/soto+st_310+regulator+stove.jpg",
                single_item_id: 70
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P1.jpg",
                single_item_id: 71
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P2.jpg",
                single_item_id: 71
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P3.jpg",
                single_item_id: 71
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/QUECHUA+Camping+tent+MH100+3P1.jpg",
                single_item_id: 72
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/QUECHUA+Camping+tent+MH100+3P2.jpg",
                single_item_id: 72
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/QUECHUA+Camping+tent+MH100+3P3.jpg",
                single_item_id: 72
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/QUECHUA+Camping+tent+MH100+3P4.jpg",
                single_item_id: 72
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P1.jpg",
                single_item_id: 73
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P2.jpg",
                single_item_id: 73
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P3.jpg",
                single_item_id: 73
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P4.jpg",
                single_item_id: 73
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P1.jpg",
                single_item_id: 74
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P2.jpg",
                single_item_id: 74
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P3.jpg",
                single_item_id: 74
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P4.jpg",
                single_item_id: 74
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/MSR+Elixir+3+Backpacking+Tent+3P5.jpg",
                single_item_id: 74
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Cycling+Ultralight+Silicone+One+Man+Tent+2P1.jpg",
                single_item_id: 75
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Cycling+Ultralight+Silicone+One+Man+Tent+2P2.jpg",
                single_item_id: 75
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Cycling+Ultralight+Silicone+One+Man+Tent+2P3.jpg",
                single_item_id: 75
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Cycling+Ultralight+Silicone+One+Man+Tent+2P4.jpg",
                single_item_id: 75
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Knight+3+Tent+3P1.jpg",
                single_item_id: 76
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Knight+3+Tent+3P2.jpg",
                single_item_id: 76
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Mongar+Ultralight+Two+Men+Tent+2P1.jpg",
                single_item_id: 77
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Mongar+Ultralight+Two+Men+Tent+2P2.jpg",
                single_item_id: 77
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nature+Hike+Mongar+Ultralight+Two+Men+Tent+2P3.jpg",
                single_item_id: 77
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p1.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p2.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p3.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p4.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p5.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Nemo+Aurora+Backpacking+Tent+1p6.jpg",
                single_item_id: 78
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/VIDALIDO+2+to+4P+Pyramid+Tent+4P1.jpg",
                single_item_id: 79
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/VIDALIDO+2+to+4P+Pyramid+Tent+4P2.jpg",
                single_item_id: 79
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P1.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P2.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P3.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P4.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P5.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/DOD+One+Pole+Tent+5P6.jpg",
                single_item_id: 80
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Snowline+New+Camp+Tent++4P1.jpg",
                single_item_id: 81
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Snowline+New+Camp+Tent++4P2.jpg",
                single_item_id: 81
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Luxe+Outdoor+Astron+33P1.jpg",
                single_item_id: 82
            },
            {
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/Luxe+Outdoor+Astron+33P2.jpg",
                single_item_id: 82
            },
        ]

    })

    await prisma.packages.createMany({
        data: [
            {
                package_name: "Grand",
                description: "Grand for Four Person ",
                details: "FORCLAZ Trekking 3 Seasons Freestanding 3P x2, Nature Hike Envelope Style Sleeping Bag With Hood U350 x4, vidalido shelter_large x1, costume style air pillow x4, etrol sleep mat x4, classic led lamp x3, fire_maple fmc_206 cookware x1, snowline lasse light chair x4, nature hike alloy ultra light foldable table_large x2, lighter x1, mosquito killing lamp x2, 28l vacuum fridge x1, claymore v600 wireless rechargeable multi fan x3, 10l Water Bag x1, snowline fire boom stove orange x2, arisu casting griddle ih induction compatible 33cm x2",
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Packages/four+person_grand.png",
                price: 950
            }, {
                package_name: "Chill",
                description: "Chill for Three Person ",
                details: "FORCLAZ Trekking 3 Seasons Freestanding 3P x1, Nature Hike Envelope Style Sleeping Bag With Hood U350 x3, vidalido shelter_large x1, costume style air pillow x3, etrol sleep mat x3, classic led lamp x2, snowline ha cook set 2 or 3 assort x1, snowline lasse light chair x3, nature hike alloy ultra light foldable table_large x1, lighter x1, mosquito killing lamp x1, 28l vacuum fridge x1, claymore v600 wireless rechargeable multi fan x2, 10l Water Bag x1, snowline fire boom stove orange x1, arisu casting griddle ih induction compatible 33cm x1",
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Packages/three+person_chill.png",
                price: 680
            }, {
                package_name: "Double",
                description: "Double for Two Person ",
                details: "3F UL GEAR 2 Person Ultralight Camping Tent 2P x1, Nature Hike Envelope Style Sleeping Bag With Hood U350 x2, vidalido shelter_small x1, costume style air pillow x2, etrol sleep mat x2, solo picnic set x2, classic led lamp x1, snowline lasse light chair x2, snowline cube table l6 x1, claymore v600 wireless rechargeable multi fan x1",
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Packages/double+person_double.png",
                price: 500
            }, {
                package_name: "Basic",
                description: "Basic for Single Person ",
                details: "3F UL GEAR 2 Person Ultralight Camping Tent 2P x1, Nature Hike Envelope Style Sleeping Bag With Hood U350 x1, vidalido shelter_small x1, costume style air pillow x1, etrol sleep mat x1, solo picnic set x1, classic led lamp x1, snowline lasse light chair x1, nature hike alloy ultra light foldable table_small x1",
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Packages/single+person_basic.png",
                price: 300
            }
        ]
    })

    await prisma.official_camp_site.createMany({
        data: [{
            address: "Art Farm",
        },
        {
            address: "BeeBee Farm",
        },
        {
            address: "BULA Adventure Base",
        },
        {
            address: "Easy Organic Farm",
        },
        {
            address: "Grassroom",
        },
        {
            address: "Urban Quit",
        },
        {
            address: "Natural Garden",
        },
        {
            address: "Po Leung Kuk Jockey Club Tai Tong Holiday Camp",
        },
        {
            address: "Tung Wah Group of Hospitals Ma Tso Lung Campsite",
        },
        {
            address: "Tree Top Cottage",
        },
        {
            address: "Joy in Wild",
        },
        {
            address: "WE CAMP",
        },
        {
            address: "Butterfly Valley",
        },
        {
            address: "Gulf Camping",
        },
        ]
    })

    await prisma.package_item.createMany({
        data: [
            {
                packages_id: 1,
                single_item_id: 73
            },
            {
                packages_id: 1,
                single_item_id: 51
            },
            {
                packages_id: 1,
                single_item_id: 43
            },
            {
                packages_id: 1,
                single_item_id: 6
            },
            {
                packages_id: 1,
                single_item_id: 53
            },
            {
                packages_id: 1,
                single_item_id: 32
            },
            {
                packages_id: 1,
                single_item_id: 14
            },
            {
                packages_id: 1,
                single_item_id: 29
            },
            {
                packages_id: 1,
                single_item_id: 20
            },
            {
                packages_id: 1,
                single_item_id: 4
            },
            {
                packages_id: 1,
                single_item_id: 36
            },
            {
                packages_id: 1,
                single_item_id: 2
            },
            {
                packages_id: 1,
                single_item_id: 3
            },
            {
                packages_id: 1,
                single_item_id: 1
            },
            {
                packages_id: 1,
                single_item_id: 68
            },
            {
                packages_id: 1,
                single_item_id: 13
            },
            {
                packages_id: 2,
                single_item_id: 73
            },
            {
                packages_id: 2,
                single_item_id: 51
            },
            {
                packages_id: 2,
                single_item_id: 43
            },
            {
                packages_id: 2,
                single_item_id: 6
            },
            {
                packages_id: 2,
                single_item_id: 53
            },
            {
                packages_id: 2,
                single_item_id: 32
            },
            {
                packages_id: 2,
                single_item_id: 16
            },
            {
                packages_id: 2,
                single_item_id: 32
            },
            {
                packages_id: 2,
                single_item_id: 14
            },
            {
                packages_id: 2,
                single_item_id: 29
            },
            {
                packages_id: 2,
                single_item_id: 20
            },
            {
                packages_id: 2,
                single_item_id: 2
            },
            {
                packages_id: 2,
                single_item_id: 3
            },
            {
                packages_id: 2,
                single_item_id: 1
            },
            {
                packages_id: 2,
                single_item_id: 68
            },
            {
                packages_id: 2,
                single_item_id: 13
            },
            {
                packages_id: 3,
                single_item_id: 71
            },
            {
                packages_id: 3,
                single_item_id: 51
            },
            {
                packages_id: 3,
                single_item_id: 45
            },
            {
                packages_id: 3,
                single_item_id: 6
            },
            {
                packages_id: 3,
                single_item_id: 53
            },
            {
                packages_id: 3,
                single_item_id: 17
            },
            {
                packages_id: 3,
                single_item_id: 32
            },
            {
                packages_id: 3,
                single_item_id: 29
            },
            {
                packages_id: 3,
                single_item_id: 27
            },
            {
                packages_id: 3,
                single_item_id: 3
            },
            {
                packages_id: 4,
                single_item_id: 71
            },
            {
                packages_id: 4,
                single_item_id: 51
            },
            {
                packages_id: 4,
                single_item_id: 45
            },
            {
                packages_id: 4,
                single_item_id: 6
            },
            {
                packages_id: 4,
                single_item_id: 53
            },
            {
                packages_id: 4,
                single_item_id: 17
            },
            {
                packages_id: 4,
                single_item_id: 32
            },
            {
                packages_id: 4,
                single_item_id: 29
            },
            {
                packages_id: 4,
                single_item_id: 21
            }
        ]
    })

    await prisma.package_all_photos.createMany({
        data: [
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_large1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/lighter.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/mosquito+killing+lamp1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+1.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/10l+water+bag.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+orange.jpg",
            },
            {
                packages_id: 1,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm1.jpg",
            },
            {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/FORCLAZ+Trekking+3+Seasons+Freestanding+3P1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_large1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/snowline+ha+cook+set+2+or+3+assort_1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/fire_maple+fmc_206+cookware_1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_large1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/28l+vacuum+fridge+1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+1.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/10l+water+bag.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Stoves/snowline+fire+boom+stove+orange.jpg",
             },
             {
                packages_id: 2,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/arisu+casting+griddle+ih+induction+compatible+33cm1.jpg",
             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_small1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+cube+table+l6+1.jpg",

             },
             {
                packages_id: 3,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Accessories/claymore+v600+wireless+rechargeable+multi+fan+1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Tents/3F+UL+GEAR+2+Person+Ultralight+Camping+Tent+2P1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Bags/Nature+Hike+Envelope+Style+Sleeping+Bag+With+Hood+U350+O1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Shelters/vidalido+shelter_small1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Air+Pillows/costume+style+air+pillow+blue1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Sleeping+Pads/etrol+sleep+mat+big+blue1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Cooking+Utensils/solo+picnic+set1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Lighting+Supplies/classic+led+lamp_black1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/snowline+lasse+light+chair_grey1.jpg",

             },
             {
                packages_id: 4,
                photo: "https://finalprojectchrysan.s3.ap-southeast-1.amazonaws.com/Furniture/nature+hike+alloy+ultra+light+foldable+table_small1.jpg",
             }

        ]
    })

}

main()
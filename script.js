document.addEventListener("DOMContentLoaded", function () {
    console.log("مرحباً بكم في موقع أرض السمر 🌿");

    // تسجيل الدخول
    const form = document.querySelector("form");

    if (
        form &&
        document.querySelector('input[type="password"]') &&
        document.querySelector('input[type="text"]')
    ) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.querySelector('input[type="text"]').value.trim();
            const password = document.querySelector('input[type="password"]').value;

            if (username !== "" && password !== "") {
                window.location.href = "./Latex.html";
            } else {
                alert("من فضلك أدخل اسم المستخدم وكلمة المرور.");
            }
        });
    }

    // استعادة الوضع الليلي
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// البحث عن الأماكن السياحية
function searchPlaces() {
    const input = document.getElementById("searchInput");

    if (!input) return;

    const filter = input.value.trim().toLowerCase();
    const sections = document.querySelectorAll("main section");
    const noResults = document.getElementById("noResults");

    let found = false;

    sections.forEach(function (section) {
        const title = section.querySelector("h2");
        const description = section.querySelector("p");

        if (title) {
            const name = title.textContent.toLowerCase();
            const details = description
                ? description.textContent.toLowerCase()
                : "";

            if (name.includes(filter) || details.includes(filter)) {
                section.style.display = "";
                found = true;
            } else {
                section.style.display = "none";
            }
        }
    });

    if (noResults) {
        noResults.style.display = found ? "none" : "block";
    }
}

// زر اقرأ المزيد
document.addEventListener("click", function (event) {
    const button = event.target.closest(".read-more-btn");

    if (!button) return;

    const contentId = button.dataset.target;
    const more = document.getElementById(contentId);

    if (!more) return;

    const isHidden = getComputedStyle(more).display === "none";

    more.style.display = isHidden ? "block" : "none";

    const lang = localStorage.getItem("siteLanguage") || "ar";

    button.textContent = isHidden
        ? (lang === "ar" ? "اقرأ أقل" : "Read Less")
        : (lang === "ar" ? "اقرأ المزيد" : "Read More");
});

// ====================================
// وصفات الأكلات السودانية - أرض السمر
// ====================================

const sudaneseRecipes = {
    asida: {
        title: "🥣 العصيدة",
        ingredients: [
            "دقيق الذرة أو الدخن حسب المتاح",
            "ماء",
            "رشة ملح حسب الرغبة"
        ],
        steps: [
            "ضعي الماء في قدر واتركيه حتى يغلي.",
            "أضيفي الدقيق تدريجيًا مع التقليب المستمر.",
            "واصلي التقليب حتى يتماسك الخليط وينضج.",
            "قدمي العصيدة مع الملاح المناسب."
        ]
    },

    gorasa: {
        title: "🥞 القراصة",
        ingredients: [
            "دقيق القمح",
            "ماء",
            "خميرة حسب الرغبة",
            "رشة ملح"
        ],
        steps: [
            "اخلطي الدقيق والماء والملح حتى تحصلي على عجينة مناسبة.",
            "اتركي العجينة ترتاح إذا استخدمتِ الخميرة.",
            "صبي جزءًا من العجين في صاج ساخن.",
            "اتركيها حتى تنضج ثم اقلبيها للجهة الأخرى.",
            "قدمي القراصة مع الملاح."
        ]
    },

    kisra: {
        title: "🫓 الكسرة",
        ingredients: [
            "دقيق الذرة",
            "ماء",
            "عجين مخمر من تحضير سابق"
        ],
        steps: [
            "اخلطي الدقيق بالماء والعجين المخمر.",
            "اتركي الخليط حتى يتخمر بالطريقة المعتادة.",
            "سخني صاج الكسرة جيدًا.",
            "افردي الخليط عليه بطبقة رقيقة.",
            "اتركيها حتى تنضج ثم ارفعيها برفق."
        ]
    },

    rob: {
        title: "🥛 ملاح الروب",
        ingredients: [
            "روب",
            "بصل حسب الرغبة",
            "ملح",
            "بهارات حسب الوصفة",
            "ماء عند الحاجة"
        ],
        steps: [
            "جهزي المكونات التي تتطلبها طريقتك المعتادة.",
            "اخلطي الروب جيدًا حتى يصبح ناعمًا.",
            "أضيفي الملح والبهارات المناسبة.",
            "أكملي التحضير بالطريقة المتبعة في منطقتك.",
            "قدمي الملاح مع العصيدة أو الكسرة."
        ]
    },

    tagalia: {
        title: "🍲 ملاح التقلية",
        ingredients: [
            "لحم حسب الرغبة",
            "بصل",
            "صلصة طماطم حسب الوصفة",
            "ويكة",
            "ملح وبهارات",
            "تقلية مجهزة"
        ],
        steps: [
            "قطعي البصل واطهيه حتى يذبل.",
            "أضيفي اللحم والبهارات وقلبي المكونات.",
            "أضيفي الماء واتركي اللحم حتى ينضج.",
            "أضيفي التقلية والويكة وبقية المكونات حسب الوصفة.",
            "اتركي الملاح حتى يصل إلى القوام المناسب."
        ]
    },

    weika: {
        title: "🌿 الويكة",
        ingredients: [
            "بامية مجففة ومطحونة",
            "ماء أو مرق",
            "ملح",
            "مكونات إضافية حسب نوع الملاح"
        ],
        steps: [
            "سخني الماء أو المرق في قدر.",
            "أضيفي المكونات الأساسية حسب الوصفة.",
            "أضيفي الويكة تدريجيًا مع التقليب.",
            "اتركيها حتى تتجانس ويصبح القوام مناسبًا.",
            "قدميها مع العصيدة أو الكسرة."
        ]
    },

    naima: {
        title: "🍲 ملاح النعيمة",
        ingredients: [
            "المكونات الأساسية حسب الطريقة المحلية",
            "ماء أو مرق عند الحاجة",
            "ملح وبهارات حسب الرغبة"
        ],
        steps: [
            "جهزي المكونات وفق الطريقة المعروفة في منطقتك.",
            "اطهي المكونات الأساسية حتى تنضج.",
            "أضيفي الملح والبهارات المناسبة.",
            "اتركي الملاح حتى يصل إلى القوام المطلوب.",
            "قدميه مع الكسرة أو القراصة."
        ]
    },

    fatta: {
        title: "🍛 الفتة السودانية",
        ingredients: [
            "خبز مقطع",
            "مرق",
            "لحم حسب الرغبة",
            "بصل وبهارات حسب الوصفة"
        ],
        steps: [
            "جهزي المرق واطهي اللحم حتى ينضج إذا استخدمتِه.",
            "قطعي الخبز إلى قطع مناسبة.",
            "رتبي الخبز في طبق التقديم.",
            "أضيفي المرق والمكونات الأخرى حسب طريقتك.",
            "قدمي الفتة وهي دافئة."
        ]
    },

    balila: {
        title: "🫘 البليلة",
        ingredients: [
            "حمص أو نوع الحبوب المفضل",
            "ماء",
            "ملح حسب الرغبة"
        ],
        steps: [
            "اغسلي الحبوب جيدًا.",
            "انقعي الحبوب التي تحتاج إلى النقع.",
            "اسلقيها في الماء حتى تنضج تمامًا.",
            "أضيفي الملح حسب الرغبة.",
            "قدمي البليلة ساخنة."
        ]
    },

    beans: {
        title: "🫘 الفول السوداني",
        ingredients: [
            "فول سوداني أو فول حسب النوع المقصود",
            "ماء",
            "ملح",
            "زيت وبهارات حسب الرغبة"
        ],
        steps: [
            "جهزي النوع المقصود من الفول واغسليه إذا لزم.",
            "اطهي الفول في الماء حتى ينضج إذا كان يحتاج إلى السلق.",
            "أضيفي الملح والتوابل المناسبة.",
            "أضيفي الزيت أو الإضافات المرغوبة.",
            "قدميه بالطريقة المناسبة."
        ]
    },

    shia: {
        title: "🥩 الشية",
        ingredients: [
            "لحم مقطع",
            "بصل حسب الرغبة",
            "ملح",
            "فلفل وبهارات",
            "قليل من الزيت عند الحاجة"
        ],
        steps: [
            "قطعي اللحم إلى قطع مناسبة.",
            "تبليه بالملح والبهارات.",
            "سخني المقلاة أو القدر المناسب.",
            "اطهي اللحم مع التقليب حتى ينضج تمامًا.",
            "قدمي الشية ساخنة."
        ]
    },

    marara: {
        title: "🥩 المرارة",
        ingredients: [
            "مكونات المرارة المجهزة من مصدر موثوق",
            "عصير ليمون",
            "ملح",
            "بهارات حسب الوصفة"
        ],
        steps: [
            "نظفي المكونات جيدًا وجهزيها بطريقة صحية.",
            "اطهي المكونات الحيوانية جيدًا قبل استخدامها.",
            "قطعيها إلى قطع صغيرة بعد أن تصبح جاهزة.",
            "أضيفي الليمون والملح والبهارات.",
            "اخلطي المكونات وقدميها بالطريقة المناسبة."
        ]
    },

    kamonia: {
        title: "🍲 الكمونية",
        ingredients: [
            "لحم مناسب للكمونية",
            "بصل",
            "كمون",
            "ملح وبهارات",
            "ماء"
        ],
        steps: [
            "نظفي اللحم وقطعيه إلى قطع مناسبة.",
            "اطهي البصل حتى يذبل.",
            "أضيفي اللحم والكمون والبهارات.",
            "أضيفي الماء واتركي اللحم حتى ينضج جيدًا.",
            "اضبطي الملح وقدمي الكمونية ساخنة."
        ]
    },

    malah: {
        title: "🍲 الملاح السوداني",
        ingredients: [
            "المكونات الأساسية حسب نوع الملاح",
            "ماء أو مرق",
            "ملح",
            "بهارات حسب الرغبة"
        ],
        steps: [
            "اختاري نوع الملاح والمكونات المناسبة له.",
            "اطهي المكونات الأساسية حتى تنضج.",
            "أضيفي الماء أو المرق حسب الحاجة.",
            "أضيفي الملح والبهارات المناسبة.",
            "اتركي الملاح حتى يصل إلى القوام المطلوب.",
            "قدميه مع العصيدة أو الكسرة."
        ]
    }
};

// قاموس ترجمة الوصفات
const recipeTranslations = {
    "🥣 العصيدة": "🥣 Asida",
    "🥞 القراصة": "🥞 Gurasa",
    "🫓 الكسرة": "🫓 Kisra",
    "🥛 ملاح الروب": "🥛 Yogurt Stew",
    "🍲 ملاح التقلية": "🍲 Tagalia Stew",
    "🌿 الويكة": "🌿 Weika",
    "🍲 ملاح النعيمة": "🍲 Naima Stew",
    "🍛 الفتة السودانية": "🍛 Sudanese Fatta",
    "🫘 البليلة": "🫘 Balila",
    "🫘 الفول السوداني": "🫘 Sudanese Ful",
    "🥩 الشية": "🥩 Shaya",
    "🥩 المرارة": "🥩 Marara",
    "🍲 الكمونية": "🍲 Kammounia",
    "🍲 الملاح السوداني": "🍲 Sudanese Stew",

    "دقيق الذرة أو الدخن حسب المتاح": "Corn or millet flour, as available",
    "ماء": "Water",
    "رشة ملح حسب الرغبة": "A pinch of salt, to taste",
    "ضعي الماء في قدر واتركيه حتى يغلي.": "Put the water in a pot and bring it to a boil.",
    "أضيفي الدقيق تدريجيًا مع التقليب المستمر.": "Gradually add the flour while stirring continuously.",
    "واصلي التقليب حتى يتماسك الخليط وينضج.": "Continue stirring until the mixture thickens and is cooked.",
    "قدمي العصيدة مع الملاح المناسب.": "Serve the asida with your preferred Sudanese stew.",

    "دقيق القمح": "Wheat flour",
    "خميرة حسب الرغبة": "Yeast, if desired",
    "رشة ملح": "A pinch of salt",
    "اخلطي الدقيق والماء والملح حتى تحصلي على عجينة مناسبة.": "Mix the flour, water, and salt until you get a suitable batter.",
    "اتركي العجينة ترتاح إذا استخدمتِ الخميرة.": "Let the batter rest if you used yeast.",
    "صبي جزءًا من العجين في صاج ساخن.": "Pour some batter onto a hot griddle.",
    "اتركيها حتى تنضج ثم اقلبيها للجهة الأخرى.": "Cook until done, then turn it over.",
    "قدمي القراصة مع الملاح.": "Serve the gurasa with Sudanese stew.",

    "دقيق الذرة": "Corn flour",
    "عجين مخمر من تحضير سابق": "Previously prepared fermented batter",
    "اخلطي الدقيق بالماء والعجين المخمر.": "Mix the flour with water and fermented batter.",
    "اتركي الخليط حتى يتخمر بالطريقة المعتادة.": "Leave the mixture to ferment as usual.",
    "سخني صاج الكسرة جيدًا.": "Heat the kisra griddle well.",
    "افردي الخليط عليه بطبقة رقيقة.": "Spread a thin layer of the mixture on the griddle.",
    "اتركيها حتى تنضج ثم ارفعيها برفق.": "Cook until done, then carefully remove it.",

    "روب": "Yogurt",
    "بصل حسب الرغبة": "Onion, as desired",
    "ملح": "Salt",
    "بهارات حسب الوصفة": "Spices, according to the recipe",
    "ماء عند الحاجة": "Water, if needed",
    "جهزي المكونات التي تتطلبها طريقتك المعتادة.": "Prepare the ingredients required by your usual recipe.",
    "اخلطي الروب جيدًا حتى يصبح ناعمًا.": "Mix the yogurt well until smooth.",
    "أضيفي الملح والبهارات المناسبة.": "Add the salt and suitable spices.",
    "أكملي التحضير بالطريقة المتبعة في منطقتك.": "Finish preparing it using your local method.",
    "قدمي الملاح مع العصيدة أو الكسرة.": "Serve the stew with asida or kisra.",

    "لحم حسب الرغبة": "Meat, as desired",
    "بصل": "Onion",
    "صلصة طماطم حسب الوصفة": "Tomato sauce, according to the recipe",
    "ويكة": "Dried okra powder",
    "ملح وبهارات": "Salt and spices",
    "تقلية مجهزة": "Prepared tagalia mixture",
    "قطعي البصل واطهيه حتى يذبل.": "Chop the onion and cook until softened.",
    "أضيفي اللحم والبهارات وقلبي المكونات.": "Add the meat and spices, then stir.",
    "أضيفي الماء واتركي اللحم حتى ينضج.": "Add water and cook until the meat is done.",
    "أضيفي التقلية والويكة وبقية المكونات حسب الوصفة.": "Add the tagalia mixture, dried okra, and other ingredients.",
    "اتركي الملاح حتى يصل إلى القوام المناسب.": "Let the stew cook until it reaches the desired consistency.",

    "بامية مجففة ومطحونة": "Dried and ground okra",
    "ماء أو مرق": "Water or stock",
    "مكونات إضافية حسب نوع الملاح": "Additional ingredients, depending on the stew",
    "سخني الماء أو المرق في قدر.": "Heat the water or stock in a pot.",
    "أضيفي المكونات الأساسية حسب الوصفة.": "Add the main ingredients according to the recipe.",
    "أضيفي الويكة تدريجيًا مع التقليب.": "Gradually add the dried okra powder while stirring.",
    "اتركيها حتى تتجانس ويصبح القوام مناسبًا.": "Let it cook until combined and the consistency is right.",
    "قدميها مع العصيدة أو الكسرة.": "Serve with asida or kisra.",

    "المكونات الأساسية حسب الطريقة المحلية": "Main ingredients, according to the local recipe",
    "ماء أو مرق عند الحاجة": "Water or stock, if needed",
    "ملح وبهارات حسب الرغبة": "Salt and spices, to taste",
    "جهزي المكونات وفق الطريقة المعروفة في منطقتك.": "Prepare the ingredients using your local method.",
    "اطهي المكونات الأساسية حتى تنضج.": "Cook the main ingredients until done.",
    "أضيفي الملح والبهارات المناسبة.": "Add the appropriate salt and spices.",
    "اتركي الملاح حتى يصل إلى القوام المطلوب.": "Cook the stew until it reaches the desired consistency.",
    "قدميه مع الكسرة أو القراصة.": "Serve with kisra or gurasa.",

    "خبز مقطع": "Pieces of bread",
    "مرق": "Broth",
    "بصل وبهارات حسب الوصفة": "Onion and spices, according to the recipe",
    "جهزي المرق واطهي اللحم حتى ينضج إذا استخدمتِه.": "Prepare the broth and cook the meat until done, if using.",
    "قطعي الخبز إلى قطع مناسبة.": "Cut the bread into suitable pieces.",
    "رتبي الخبز في طبق التقديم.": "Arrange the bread on a serving plate.",
    "أضيفي المرق والمكونات الأخرى حسب طريقتك.": "Add the broth and other ingredients according to your recipe.",
    "قدمي الفتة وهي دافئة.": "Serve the fatta while warm.",

    "حمص أو نوع الحبوب المفضل": "Chickpeas or your preferred grain",
    "ملح حسب الرغبة": "Salt, to taste",
    "اغسلي الحبوب جيدًا.": "Wash the grains thoroughly.",
    "انقعي الحبوب التي تحتاج إلى النقع.": "Soak the grains that require soaking.",
    "اسلقيها في الماء حتى تنضج تمامًا.": "Boil them in water until fully cooked.",
    "أضيفي الملح حسب الرغبة.": "Add salt to taste.",
    "قدمي البليلة ساخنة.": "Serve the balila hot.",

    "فول سوداني أو فول حسب النوع المقصود": "Peanuts or fava beans, depending on the intended dish",
    "زيت وبهارات حسب الرغبة": "Oil and spices, as desired",
    "جهزي النوع المقصود من الفول واغسليه إذا لزم.": "Prepare the chosen beans and wash them if necessary.",
    "اطهي الفول في الماء حتى ينضج إذا كان يحتاج إلى السلق.": "Boil the beans in water until cooked, if needed.",
    "أضيفي الملح والتوابل المناسبة.": "Add salt and suitable seasonings.",
    "أضيفي الزيت أو الإضافات المرغوبة.": "Add oil or any desired extras.",
    "قدميه بالطريقة المناسبة.": "Serve as desired.",

    "لحم مقطع": "Chopped meat",
    "فلفل وبهارات": "Pepper and spices",
    "قليل من الزيت عند الحاجة": "A little oil, if needed",
    "قطعي اللحم إلى قطع مناسبة.": "Cut the meat into suitable pieces.",
    "تبليه بالملح والبهارات.": "Season with salt and spices.",
    "سخني المقلاة أو القدر المناسب.": "Heat a suitable pan or pot.",
    "اطهي اللحم مع التقليب حتى ينضج تمامًا.": "Cook the meat, stirring, until fully cooked.",
    "قدمي الشية ساخنة.": "Serve the shaya hot.",

    "مكونات المرارة المجهزة من مصدر موثوق": "Marara ingredients obtained from a reliable source",
    "عصير ليمون": "Lemon juice",
    "بهارات حسب الوصفة": "Spices, according to the recipe",
    "نظفي المكونات جيدًا وجهزيها بطريقة صحية.": "Clean the ingredients thoroughly and prepare them hygienically.",
    "اطهي المكونات الحيوانية جيدًا قبل استخدامها.": "Cook animal-based ingredients thoroughly before use.",
    "قطعيها إلى قطع صغيرة بعد أن تصبح جاهزة.": "Cut them into small pieces once ready.",
    "أضيفي الليمون والملح والبهارات.": "Add lemon juice, salt, and spices.",
    "اخلطي المكونات وقدميها بالطريقة المناسبة.": "Mix the ingredients and serve.",

    "لحم مناسب للكمونية": "Meat suitable for kammounia",
    "كمون": "Cumin",
    "نظفي اللحم وقطعيه إلى قطع مناسبة.": "Clean the meat and cut it into suitable pieces.",
    "اطهي البصل حتى يذبل.": "Cook the onion until softened.",
    "أضيفي اللحم والكمون والبهارات.": "Add the meat, cumin, and spices.",
    "أضيفي الماء واتركي اللحم حتى ينضج جيدًا.": "Add water and cook the meat thoroughly.",
    "اضبطي الملح وقدمي الكمونية ساخنة.": "Adjust the salt and serve the kammounia hot.",
    "اختاري نوع الملاح والمكونات المناسبة له.": "Choose the stew and its suitable ingredients.",
    "أضيفي الماء أو المرق حسب الحاجة.": "Add water or stock as needed.",
    "قدميه مع العصيدة أو الكسرة.": "Serve with asida or kisra."
};

// عرض الوصفة المختارة
function showRecipe() {
    const select = document.getElementById("recipeSelect");
    const recipeBox = document.getElementById("recipeBox");
    const recipeTitle = document.getElementById("recipeTitle");
    const recipeIngredients = document.getElementById("recipeIngredients");
    const recipeSteps = document.getElementById("recipeSteps");

    if (!select || !recipeBox || !recipeTitle ||
        !recipeIngredients || !recipeSteps) {
        return;
    }

    const recipe = sudaneseRecipes[select.value];

    const lang = localStorage.getItem("siteLanguage") || "ar";

    if (!recipe) {
        alert(
            lang === "ar"
                ? "اختاري أكلة أولًا ❤️"
                : "Please choose a dish first ❤️"
        );
        return;
    }

    function translateRecipe(text) {
        return lang === "ar"
            ? text
            : (recipeTranslations[text] || translations[text] || text);
    }

    recipeTitle.textContent = translateRecipe(recipe.title);

    recipeIngredients.replaceChildren();
    recipeSteps.replaceChildren();

    recipe.ingredients.forEach(function (ingredient) {
        const li = document.createElement("li");
        li.textContent = translateRecipe(ingredient);
        recipeIngredients.appendChild(li);
    });

    recipe.steps.forEach(function (step) {
        const li = document.createElement("li");
        li.textContent = translateRecipe(step);
        recipeSteps.appendChild(li);
    });

    recipeBox.style.display = "block";

    recipeBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// إغلاق الوصفة
function closeRecipe() {
    const recipeBox = document.getElementById("recipeBox");

    if (recipeBox) {
        recipeBox.style.display = "none";
    }
}

// الوضع الليلي
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// قاموس ترجمة موقع أرض السمر
const translations = {
    "الرئيسية": "Home",
    "من نحن": "About Us",
    "أماكن سياحية": "Tourist Places",
    "الثقافة والتراث": "Culture and Heritage",
    "الأكلات السودانية": "Sudanese Food",
    "تواصل معنا": "Contact Us",
    "تسجيل الخروج": "Log Out",
    "أرض السمر": "Ard Al-Samar",
    "هدف الموقع": "Our Goal",
    "ماذا نقدم؟": "What We Offer",
    "السياحة في السودان": "Tourism in Sudan",
    "الثقافة السودانية": "Sudanese Culture",
    "التراث السوداني": "Sudanese Heritage",
    "الأكلات الشعبية": "Traditional Sudanese Food",
    "الاسم": "Name",
    "البريد الإلكتروني": "Email",
    "الموضوع": "Subject",
    "الرسالة": "Message",
    "إرسال": "Send",
    "مسح": "Clear",
    "رجوع": "Back",
    "العودة إلى الصفحة الرئيسية": "Back to Home",
    "كلمة المرور": "Password",
    "اسم المستخدم": "Username",
    "تسجيل الدخول": "Log In",
    "إنشاء حساب": "Create Account",
    "بحث": "Search",
    "ابحث هنا": "Search here",
    "السودان": "Sudan",
    "مرحبا بكم في أرض السمر": "Welcome to Ard Al-Samar",
    "أدخل اسم المستخدم": "Enter Username",
    "أدخل كلمة المرور": "Enter Password",

    "من نحن - أرض السمر": "About Us - Ard Al-Samar",
    "من نحن؟": "Who Are We?",
    "مرحبًا بكم في موقع": "Welcome to",
    "وهو موقع يهدف إلى التعريف بجمال السودان وتاريخه وثقافته وتراثه وأماكنه السياحية.": "This website introduces the beauty of Sudan, its history, culture, heritage, and tourist attractions.",
    "نسعى من خلال هذا الموقع إلى تقديم معلومات مبسطة وممتعة عن السودان، والتعرف على تنوعه الثقافي والطبيعي والحضاري.": "Through this website, we aim to provide simple and engaging information about Sudan and explore its cultural, natural, and historical diversity.",
    "هدفنا هو تقديم صورة جميلة عن السودان، والتعريف بأهم الأماكن السياحية والمعالم التاريخية، بالإضافة إلى الثقافة والتراث والأكلات السودانية المشهورة.": "Our goal is to present a beautiful picture of Sudan and introduce its most important tourist attractions and historical landmarks, as well as its culture, heritage, and famous Sudanese dishes.",
    "يقدم الموقع مجموعة من المعلومات عن:": "The website provides information about:",
    "الأماكن السياحية في السودان": "Tourist Attractions in Sudan",
    "الثقافة والتراث السوداني": "Sudanese Culture and Heritage",
    "الأكلات السودانية": "Sudanese Food",
    "الطبيعة والجمال في السودان": "Sudan's Nature and Beauty",
    "⬅️ العودة إلى الصفحة الرئيسية": "⬅️ Back to Home",

    "🏞️ الأماكن السياحية في السودان": "🏞️ Tourist Attractions in Sudan",
    "🔍 ابحثي عن مكان سياحي...": "🔍 Search for a tourist attraction...",
    "عذراً، لم يتم العثور على المكان السياحي.": "Sorry, no tourist attraction was found.",

    "🏺 أهرامات مروي": "🏺 Pyramids of Meroë",
    "من أشهر المواقع الأثرية في السودان، وترتبط بتاريخ مملكة كوش القديمة.": "One of Sudan's most famous archaeological sites, associated with the history of the ancient Kingdom of Kush.",
    "⛰️ جبل البركل": "⛰️ Jebel Barkal",
    "يقع في الولاية الشمالية، ويضم آثارًا ومعابد مرتبطة بتاريخ الحضارات النوبية القديمة.": "Located in the Northern State, it contains ruins and temples associated with ancient Nubian civilizations.",
    "🏛️ كرمة والدفوفة": "🏛️ Kerma and the Deffufa",
    "من أهم المواقع الأثرية في السودان، وتتميز بالدفوفة الغربية وآثار حضارة كرمة.": "One of Sudan's most important archaeological sites, known for the Western Deffufa and the remains of the Kerma civilization.",
    "🏺 دنقلا القديمة": "🏺 Old Dongola",
    "موقع تاريخي مهم في الولاية الشمالية، وارتبط بالممالك النوبية القديمة.": "An important historical site in the Northern State, associated with the ancient Nubian kingdoms.",
    "🛕 معبد صُلب": "🛕 Soleb Temple",
    "من المواقع الأثرية المهمة في شمال السودان، ويضم بقايا معبد تاريخي على ضفاف النيل.": "An important archaeological site in northern Sudan, containing the remains of a historic temple on the banks of the Nile.",
    "🏝️ جزيرة ساي": "🏝️ Sai Island",
    "جزيرة تقع في النيل بالولاية الشمالية، وتتميز بأهميتها الأثرية والتاريخية.": "An island in the Nile in the Northern State, notable for its archaeological and historical importance.",
    "🌊 سد مروي": "🌊 Merowe Dam",
    "من المشروعات الكبيرة على نهر النيل، ويقع بالقرب من منطقة مروي.": "One of the major projects on the Nile River, located near the Merowe area.",
    "🏺 النقعة": "🏺 Naqa",
    "موقع أثري مهم في السودان يضم معابد ومنشآت تعود إلى فترة مملكة كوش.": "An important archaeological site in Sudan, with temples and structures dating to the Kingdom of Kush.",
    "🏺 المصورات الصفراء": "🏺 Musawwarat es-Sufra",
    "من المواقع الأثرية المهمة في منطقة البطانة، وتضم آثارًا ومعابد قديمة.": "An important archaeological site in the Butana region, containing ancient ruins and temples.",
    "⛰️ خانق سبلوقة": "⛰️ Sabaloka Gorge",
    "منطقة طبيعية مميزة على نهر النيل، حيث يمر النهر بين الجبال.": "A distinctive natural area on the Nile River, where the river flows between mountains.",
    "🌊 سواكن القديمة": "🌊 Old Suakin",
    "مدينة تاريخية على ساحل البحر الأحمر، وتشتهر بالمباني القديمة والتراث المعماري.": "A historic city on the Red Sea coast, known for its old buildings and architectural heritage.",
    "🐠 بورتسودان": "🐠 Port Sudan",
    "مدينة ساحلية مشهورة بالبحر الأحمر والشواطئ والحياة البحرية.": "A coastal city known for the Red Sea, its beaches, and marine life.",
    "🪸 محمية سنقنيب البحرية": "🪸 Sanganeb Marine National Park",
    "من أشهر المناطق البحرية في البحر الأحمر، وتتميز بالشعاب المرجانية والتنوع البحري.": "One of the Red Sea's best-known marine areas, featuring coral reefs and rich marine biodiversity.",
    "🐢 خليج دنقناب": "🐢 Dungonab Bay",
    "منطقة ساحلية تتميز بالبيئة البحرية والشعاب المرجانية والتنوع الطبيعي.": "A coastal area known for its marine environment, coral reefs, and natural diversity.",
    "⛰️ جبال التاكا في كسلا": "⛰️ Taka Mountains in Kassala",
    "من أشهر المعالم الطبيعية في كسلا، وتتميز بالجبال والمناظر الطبيعية الجميلة.": "One of Kassala's best-known natural landmarks, featuring mountains and beautiful scenery.",
    "🦌 محمية الدندر": "🦌 Dinder National Park",
    "من أهم المحميات الطبيعية في السودان، وتتميز بتنوع الحيوانات والنباتات والحياة البرية.": "One of Sudan's most important nature reserves, known for its diverse wildlife and plant life.",
    "⛰️ جبل مرة": "⛰️ Jebel Marra",
    "منطقة جبلية في دارفور تتميز بالمرتفعات والوديان والمناظر الطبيعية.": "A mountainous region in Darfur, known for its highlands, valleys, and natural scenery.",

    "الثقافة والتراث - أرض السمر": "Culture and Heritage - Ard Al-Samar",
    "الثقافة والتراث السوداني": "Sudanese Culture and Heritage",
    "تعرّف على جانب من الثقافة والتراث السوداني، وما يميز المجتمع السوداني من عادات وتقاليد وفنون وتراث متنوع.": "Discover Sudanese culture and heritage, including the customs, traditions, arts, and diverse heritage that make Sudanese society unique.",

    "🤝 العادات والتقاليد": "🤝 Customs and Traditions",
    "يتميز المجتمع السوداني بتنوع العادات والتقاليد من منطقة إلى أخرى، مع انتشار قيم الكرم والضيافة والتعاون والترابط بين أفراد المجتمع.": "Sudanese society has diverse customs and traditions that vary from one region to another, with strong values of generosity, hospitality, cooperation, and social solidarity.",
    "وتظهر هذه العادات بصورة واضحة في المناسبات الاجتماعية والأعياد والأفراح والتجمعات العائلية.": "These customs are clearly reflected in social occasions, holidays, weddings, and family gatherings.",
    "من العادات الجميلة في المجتمع السوداني إكرام الضيف وتقديم القهوة والشاي، والاهتمام بالزيارات العائلية ومساعدة الجيران في المناسبات المختلفة.": "Beautiful Sudanese customs include welcoming guests, serving coffee and tea, visiting family members, and helping neighbors on different occasions.",
    "كما تُعد الجَبَنة السودانية جزءًا من ثقافة الضيافة، حيث يجتمع الأهل والأصدقاء حولها في أجواء مليئة بالمودة والترابط الاجتماعي.": "Sudanese jebena coffee is also an important part of hospitality culture, bringing family and friends together in a warm atmosphere of affection and social connection.",

    "👗 الزي السوداني": "👗 Sudanese Traditional Clothing",
    "يُعد الزي السوداني جزءًا مهمًا من الهوية الثقافية، ومن أشهر الأزياء النسائية الثوب السوداني الذي يتميز بتنوع ألوانه وتصاميمه.": "Traditional Sudanese clothing is an important part of cultural identity. One of the best-known garments worn by women is the Sudanese tobe, which comes in a wide variety of colors and designs.",
    "كما تختلف الملابس التقليدية للرجال والنساء باختلاف المناطق والمناسبات.": "Traditional clothing for men and women varies according to region and occasion.",
    "يعكس الثوب السوداني جمال الثقافة السودانية، وتتنوع ألوانه وطرق ارتدائه حسب المناسبات. كما تُعد الجلابية من أشهر الملابس التقليدية للرجال.": "The Sudanese tobe reflects the beauty of Sudanese culture, with different colors and styles suited to various occasions. The jalabiya is also one of the most popular traditional garments worn by men.",
    "وتختلف تفاصيل الأزياء من منطقة إلى أخرى، مما يعكس التنوع الثقافي والتراثي في السودان.": "Clothing styles differ from one region to another, reflecting Sudan's cultural diversity and heritage.",

    "🎶 الموسيقى والفنون الشعبية": "🎶 Music and Folk Arts",
    "تتميز السودان بتنوع كبير في الموسيقى والفنون الشعبية، وتختلف الإيقاعات والآلات والأغاني باختلاف المناطق والثقافات المحلية.": "Sudan has a rich diversity of music and folk arts. Rhythms, instruments, and songs vary across regions and local cultures.",
    "وتظهر الفنون الشعبية في المناسبات الاجتماعية والاحتفالات والمهرجانات.": "Folk arts are an important part of social occasions, celebrations, and festivals.",
    "تشتهر الموسيقى السودانية بإيقاعاتها المتنوعة، ومن أشهر الآلات الموسيقية الطمبور والعود. كما تؤدي الرقصات الشعبية دورًا مهمًا في الأفراح والمناسبات الاجتماعية.": "Sudanese music is known for its diverse rhythms and instruments, including the tambour and oud. Traditional dances also play an important role in weddings and social celebrations.",
    "وتعبّر الأغاني السودانية عن الفرح والحزن والحب والوطن، وتعكس تنوع الثقافات في السودان.": "Sudanese songs express joy, sadness, love, and patriotism, reflecting the country's cultural diversity.",

    "🧺 الحرف والصناعات التقليدية": "🧺 Traditional Crafts and Industries",
    "تشمل الحرف التقليدية السودانية صناعة الفخار والسلال والحصير وبعض المنتجات المصنوعة من سعف النخيل والمواد المحلية.": "Traditional Sudanese crafts include pottery, basket weaving, mat making, and products made from palm fronds and other local materials.",
    "وتمثل هذه الحرف جانبًا من التراث الشعبي الذي توارثته الأجيال.": "These crafts represent an important part of the folk heritage passed down through generations.",
    "تشمل الحرف اليدوية السودانية صناعة الفخار، والسلال، والمشغولات الجلدية، والتطريز. وتختلف هذه الحرف حسب المواد المتوفرة في كل منطقة.": "Sudanese handicrafts include pottery, basket weaving, leatherwork, and embroidery. These crafts vary according to the materials available in each region.",
    "وتسهم الحرف التقليدية في المحافظة على التراث، كما تعكس مهارات الحرفيين وإبداعهم عبر الأجيال.": "Traditional crafts help preserve cultural heritage and showcase the skills and creativity of artisans across generations.",

    "🏺 التراث النوبي": "🏺 Nubian Heritage",
    "يتميز التراث النوبي بتاريخ طويل وثقافة غنية ظهرت في اللغة والفنون والعمارة والعادات والتقاليد في المناطق النوبية.": "Nubian heritage has a long history and a rich culture reflected in the language, arts, architecture, customs, and traditions of Nubian regions.",
    "وتوجد العديد من المواقع الأثرية التي تعكس تاريخ الحضارات النوبية القديمة.": "Many archaeological sites reflect the history of ancient Nubian civilizations.",
    "يتميز التراث النوبي بلغته وعاداته وتقاليده وفنونه الشعبية، كما تظهر هويته في العمارة التقليدية والزخارف والأغاني والرقصات.": "Nubian heritage is distinguished by its language, customs, traditions, and folk arts. Its identity is also reflected in traditional architecture, decorative designs, songs, and dances.",
    "ويمثل التراث النوبي جزءًا أصيلًا من التنوع الثقافي في السودان، وتعمل الأجيال على المحافظة عليه ونقله إلى الأبناء.": "Nubian heritage is an integral part of Sudan's cultural diversity, and successive generations work to preserve it and pass it on to their children.",

    "🌿 التنوع الثقافي": "🌿 Cultural Diversity",
    "يضم السودان مجموعات وثقافات متنوعة، ولكل منطقة موروثها الخاص من العادات والفنون والموسيقى والملابس والأطعمة.": "Sudan is home to diverse communities and cultures, each with its own customs, arts, music, clothing, and food traditions.",
    "ويجعل هذا التنوع الثقافة السودانية غنية ومتعددة الأشكال.": "This diversity makes Sudanese culture rich and multifaceted.",
    "يعكس التنوع الثقافي في السودان تعدد اللغات والعادات والتقاليد والفنون بين مختلف المجتمعات، ويمنح كل منطقة طابعها الثقافي المميز.": "Sudan's cultural diversity is reflected in the many languages, customs, traditions, and arts of its communities, giving each region its own distinctive cultural identity.",
    "ويساعد التعرف على ثقافات المناطق المختلفة في تعزيز التفاهم والاحترام المتبادل والمحافظة على التراث السوداني للأجيال القادمة.": "Learning about different regional cultures promotes understanding and mutual respect and helps preserve Sudanese heritage for future generations.",

    "اقرأ المزيد": "Read More",
    "اقرأ أقل": "Read Less",
    "الأكلات السودانية - أرض السمر": "Sudanese Food - Ard Al-Samar",
    "👩‍🍳 اكتشف طريقة تحضير الأكلات السودانية": "👩‍🍳 Discover How to Prepare Sudanese Dishes",
    "اختاري الأكلة:": "Choose a Dish:",
    "-- اختاري أكلة --": "-- Choose a Dish --",
    "العصيدة": "Asida (Sudanese Porridge)",
    "القراصة": "Gurasa",
    "الكسرة": "Kisra",
    "ملاح التقلية": "Tagalia Stew",
    "ملاح الروب": "Yogurt Stew",
    "الويكة": "Weika (Dried Okra)",
    "ملاح النعيمة": "Naima Stew",
    "الفتة السودانية": "Sudanese Fatta",
    "البليلة": "Balila",
    "الفول": "Ful (Fava Beans)",
    "الشية": "Shaya (Grilled Meat)",
    "المرارة": "Marara",
    "الكمونية": "Kammounia",
    "الملاح": "Sudanese Stew",
    "عرض طريقة التحضير 🍲": "Show Recipe 🍲",
    "🧂 المكونات": "🧂 Ingredients",
    "👩‍🍳 طريقة التحضير": "👩‍🍳 Preparation Method",
    "إغلاق الوصفة": "Close Recipe",

    "تواصل معنا - أرض السمر": "Contact Us - Ard Al-Samar",
    "تواصل معنا": "Contact Us",
    "يسعدنا تواصلك معنا وإرسال آرائك": "We are happy to hear from you and receive your opinions",
    "واقتراحاتك حول موقع أرض السمر.": "and suggestions about the Ard Al-Samar website.",
    "📝 أرسل لنا رسالتك": "📝 Send Us Your Message",
    "الاسم:": "Name:",
    "اكتب اسمك": "Enter your name",
    "البريد الإلكتروني:": "Email:",
    "اكتب بريدك الإلكتروني": "Enter your email address",
    "الرسالة:": "Message:",
    "اكتب رسالتك هنا": "Write your message here",
    "إرسال الرسالة": "Send Message",
    "⬅️ العودة إلى الصفحة الرئيسية": "⬅️ Back to Home Page",

    "تسجيل الخروج - أرض السمر": "Logout - Ard Al-Samar",
    "تم تسجيل الخروج": "Logged Out Successfully",
    "تم تسجيل خروجك من موقع أرض السمر بنجاح.": "You have successfully logged out of the Ard Al-Samar website.",
    "شكرًا لزيارتك، ونتمنى أن تعود إلينا مرة أخرى": "Thank you for visiting. We hope you will return again",
    "لاكتشاف جمال السودان وثقافته وتراثه.": "to discover the beauty of Sudan, its culture, and heritage.",
    "العودة إلى تسجيل الدخول": "Return to Login",
  "🍽️ أشهر الأكلات السودانية": "🍽️ Most Famous Sudanese Dishes",

"يتميز المطبخ السوداني بتنوع أكلاته ونكهاته، وتختلف بعض الأطباق من منطقة إلى أخرى، كما ترتبط كثير من الأكلات بالمناسبات والعادات السودانية.": "Sudanese cuisine is known for its variety of dishes and flavors. Some dishes differ from one region to another, and many are associated with Sudanese occasions and traditions.",

"🥣 العصيدة": "🥣 Asida",
"العصيدة من أشهر الأكلات السودانية، وتصنع عادةً من الدقيق والماء، وتقدم مع أنواع مختلفة من الإدام.": "Asida is one of Sudan's most famous dishes. It is usually made from flour and water and served with different types of stew.",

"🥞 القراصة": "🥞 Gorasa",
"القراصة من الأكلات السودانية المعروفة، وهي نوع من الخبز الرقيق المصنوع من الدقيق، وتقدم غالبًا مع الإدام أو الملاح.": "Gorasa is a well-known Sudanese dish. It is a type of thin bread made from flour and is usually served with stew.",

"🫓 الكسرة": "🫓 Kisra",
"الكسرة من أشهر أنواع الخبز السوداني، وتصنع من العجين المخمر وتقدم مع أنواع مختلفة من الملاح والإدام.": "Kisra is one of Sudan's most famous types of bread. It is made from fermented dough and served with different stews.",

"🍲 ملاح التقلية": "🍲 Tagalia Stew",
"ملاح التقلية من الأكلات السودانية الشعبية، ويتميز بقوامه ونكهته الخاصة، ويقدم مع الكسرة أو العصيدة.": "Tagalia is a popular Sudanese stew with a distinctive texture and flavor. It is served with kisra or asida.",

"🥛 ملاح الروب": "🥛 Yogurt Stew",
"من أنواع الملاح المعروفة في السودان، ويُحضّر باستخدام الروب ومكونات أخرى تختلف حسب طريقة التحضير والمنطقة.": "Yogurt stew is a well-known Sudanese dish made with yogurt and other ingredients that vary by region and recipe.",

"🌿 الويكة": "🌿 Weika",
"الويكة من الأكلات السودانية المعروفة، وتحضر من البامية المجففة والمطحونة، وتقدم مع العصيدة أو الكسرة.": "Weika is a well-known Sudanese dish made from dried, ground okra and served with asida or kisra.",

"🍲 ملاح النعيمة": "🍲 Naeima Stew",
"ملاح النعيمة من الأكلات الشعبية السودانية، ويقدم مع أنواع مختلفة من الخبز السوداني مثل الكسرة والقراصة.": "Naeima stew is a popular Sudanese dish served with Sudanese bread such as kisra and gorasa.",

"🍛 الفتة السودانية": "🍛 Sudanese Fatta",
"الفتة من الأطباق التي تحضر بطرق مختلفة، ويمكن أن تحتوي على الخبز والمرق ومكونات أخرى حسب نوع الفتة.": "Fatta is prepared in different ways and may contain bread, broth, and other ingredients depending on the type.",

"🫘 البليلة": "🫘 Balila",
"البليلة من الأطعمة الشعبية في السودان، وتحضر من الحمص أو بعض أنواع الحبوب، ويمكن تقديمها ساخنة أو بطرق مختلفة.": "Balila is a popular Sudanese food made from chickpeas or other grains. It can be served hot or prepared in different ways.",

"🫘 الفول السوداني": "🫘 Sudanese Fava Beans",
"الفول من الأطعمة المنتشرة في السودان، ويقدم بطرق متعددة ويعد من الأطعمة المعروفة في وجبات الإفطار.": "Fava beans are widely eaten in Sudan, prepared in different ways, and commonly served for breakfast.",

"🥩 الشية": "🥩 Shaiya",
"الشية من الأكلات السودانية التي تعتمد على اللحم المطهو مع التوابل، وتقدم في المناسبات والوجبات المختلفة.": "Shaiya is a Sudanese dish made with meat cooked with spices and served on different occasions and meals.",

"🥩 المرارة": "🥩 Marara",
"المرارة من الأكلات الشعبية المعروفة في السودان، وتحضر بطريقة خاصة باستخدام مكونات وتوابل متنوعة.": "Marara is a well-known Sudanese traditional dish prepared in a special way using various ingredients and spices.",

"🍲 الكمونية": "🍲 Kamounia",
"الكمونية من الأكلات السودانية الشعبية، وتحضر باستخدام مكونات مختلفة مع التوابل، وتعد من الأطباق المعروفة في بعض المناطق.": "Kamounia is a popular Sudanese dish prepared with various ingredients and spices. It is well known in some regions.",

"🍲 الملاح": "🍲 Sudanese Stew",
"الملاح جزء أساسي من المطبخ السوداني، وله أنواع متعددة تختلف في المكونات وطريقة التحضير، ويقدم مع العصيدة أو الكسرة.": "Stew is an essential part of Sudanese cuisine. It comes in many varieties and is served with asida or kisra.",

"الحلويات والمشروبات": "Sweets and Drinks",
"يتميز السودان أيضًا بمجموعة من الحلويات والمشروبات الشعبية التي تقدم في المناسبات والأعياد والتجمعات.": "Sudan also has a variety of traditional sweets and drinks served during celebrations, holidays, and gatherings.",

    "🌐 English": "🌐 English",
    "🌐 العربية": "🌐 العربية",
    "🌙 الوضع الليلي": "🌙 Dark Mode",
    "🌙 Dark Mode": "🌙 Dark Mode"
};

// تطبيق اللغة
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
        if (node.__originalText === undefined) {
            node.__originalText = node.nodeValue;
        }

        const original = node.__originalText;
        const cleanText = original.trim().replace(/\s+/g, " ");

        if (lang === "ar") {
            node.nodeValue = original;
        } else if (translations[cleanText]) {
            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];

            node.nodeValue =
                leading + translations[cleanText] + trailing;
        }
    }

    // ترجمة الحقول والصور
    document.querySelectorAll(
        "input[placeholder], textarea[placeholder], img[alt]"
    ).forEach(function (element) {
        ["placeholder", "alt"].forEach(function (attr) {
            if (!element.hasAttribute(attr)) return;

            const originalAttr = "original-" + attr;

            if (!element.hasAttribute(originalAttr)) {
                element.setAttribute(
                    originalAttr,
                    element.getAttribute(attr)
                );
            }

            const original = element.getAttribute(originalAttr);

            element.setAttribute(
                attr,
                lang === "ar"
                    ? original
                    : (translations[original] || original)
            );
        });
    });

    // ترجمة عنوان الصفحة
    const title = document.querySelector("title");

    if (title) {
        const originalTitle =
            title.getAttribute("data-original-title") ||
            title.textContent;

        title.setAttribute("data-original-title", originalTitle);

        title.textContent = lang === "ar"
            ? originalTitle
            : (translations[originalTitle.trim()] || originalTitle);
    }

    // تحديث زر اللغة
    const languageButton = document.querySelector(
        '.theme-control button[onclick="toggleLanguage()"]'
    );

    if (languageButton) {
        languageButton.textContent =
            lang === "ar" ? "🌐 English" : "🌐 العربية";
    }

    // تحديث زر الوضع الليلي
    const darkModeButton = document.querySelector(
        '.theme-control button[onclick="toggleDarkMode()"]'
    );

    if (darkModeButton) {
        darkModeButton.textContent =
            lang === "ar" ? "🌙 الوضع الليلي" : "🌙 Dark Mode";
    }

    // تحديث الأزرار التي تعتمد على اللغة
    document.querySelectorAll(".read-more-btn").forEach(function (button) {
        const content = document.getElementById(button.dataset.target);

        if (!content) return;

        const isVisible = getComputedStyle(content).display !== "none";

        button.textContent = isVisible
            ? (lang === "ar" ? "اقرأ أقل" : "Read Less")
            : (lang === "ar" ? "اقرأ المزيد" : "Read More");
    });
}

// تغيير اللغة وحفظ الاختيار
function toggleLanguage() {
    const currentLang =
        localStorage.getItem("siteLanguage") || "ar";

    const newLang = currentLang === "ar" ? "en" : "ar";

    localStorage.setItem("siteLanguage", newLang);
    applyLanguage(newLang);
}

// استعادة اللغة عند فتح الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const savedLang =
        localStorage.getItem("siteLanguage") || "ar";

    applyLanguage(savedLang);
});
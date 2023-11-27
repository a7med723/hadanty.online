const translations ={
    en: {

        english: "En",
        arabic: "ع",

        span0: "MY",
        span1 :"N",
        span2 :"UR",
        span3 :"SE",
        span4 :"RY",

        span01 : "",
        span11 :"",
        span21 :"",
        span31 :"",
        span41 :"",

        span5 :"Select",
        span6 :"User",

   
        sched:"schedule",
        teach:"teachers",
        gal:"gallery",
        apl:"apply",
        prog:"programs",
        eval:"evaluation",
        carer:"creers",
        cont:"contact",
        abou:"aboute",
        log:"login",
       
        sign:"sign in",

        nadien:"Nadien",
        ehab:"Ehab",
        sally:"Sally",
        mohamed:"Mohamed",

        en_teach:"english teacher",
        ma_teach:"math teacher",
        ar_teach:"arabic teacher",
        co_teach:"computer teacher",

        email:"Email",
        password:"Password",
        sign_in:"Sign In",
        login:"login",
        apply:"Apply now",
        name_chld:"the child's name",
        age:"age",
        sel_gnd:"select gender",
        male:"male",
        female:"female",
        address:"address",
        fa_job:"father's job",
        hobb:"hobbies",
        phon:"phone",
        pay:"payment",
        send:"send",

        info:"information",
        f_name:"full name",
        qualif:"qualification",
        year_of_g:"year of graduation",
        upload:"upload your CV",
        cv:"CV",
              
        
      },
      ar: {

        english: "En",
        arabic: "ع",
        
        span0 : "",
        span1 :"",
        span2 :"",
        span3 :"",
        span4 :"",

        span01 : "حـ",
        span11 :"ض",
        span21 :"ا",
        span31 :"نت",
        span41 :"ي",



        sched:"الجدول",
        teach:"المدرسين",
        gal:"المعرض",
        apl:"تقديم",
        prog:"برامـــجــــنــــــا",
        eval:"تــقـيــيــمـــات",
        carer:"وظائـف",
        cont:"تواصل",
        abou:"عـــــــنــــــا",
        log:" تسجيل",
       
       sign:" تسجيل دخول",

       nadien:"نادين",
        ehab:"إيهاب",
        sally:"سالي",
        mohamed:"محمد",

        en_teach:"معلم الانجليزية",
        ma_teach:"معلم الرياضيات",
        ar_teach:"معلم العربية",
        co_teach:"معلم الحاسب",
        
        email:"إيميل",
        password:"كلمة السر",
        sign_in:"تسجيل دخول",
        login:"تسجيل",
        apply:"قدم الان",
        name_chld:"اسم الطفل",
        age:"العمر",
        sel_gnd:"تحديد النوع",
        male:"ذكر",
        female:"أنثي",
        address:"العنوان",
        fa_job:"وظيفة الاب",
        hobb:"الهوايات",
        phon:"تليفون",
        pay:"دفع",
        send:"ارسال",

        info:" البيانات",
        f_name:" الاسم بالكامل",
        qualif:"مهارات",
        year_of_g:"سنة التخرج",
        upload:" CVحمل ال",


        
      },
}
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);

});
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang"));
  });
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-transl]");
    elements.forEach((element) => {
      const translationKey = element.getAttribute("data-transl");
      element.textContent = translations[language][translationKey];
    });
    // document.dir = language === "ar" ? "rtl" : "ltr";
};
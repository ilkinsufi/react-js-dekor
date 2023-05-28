import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import tickBox from "../Images/icons8-tick-box.gif";
import ScrollToTop from "react-scroll-to-top";

function Account() {
  return (
    <>
      <ScrollToTop smooth />
      <div className="d__header">
        <Link to="/dekor/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>hesab</span>
      </div>
      <div className="container">
        <div className="accountrow">
          <div className="leftAcc">
            <h3>Giriş</h3>
            <p>
              Təkrar xoş gəldiniz. Zəhmət olmasa istifadəçi adınızı və şifrənizi
              yazın.
            </p>
            <form>
              <input type="text" placeholder="İstifadəçi adı və ya e-poçt" />
              <input type="password" placeholder="Şifrə" />

              <span className="forremember">
                <div>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <svg viewBox="0 0 21 18">
                      <symbol
                        id="tick-path"
                        viewBox="0 0 21 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
                          fill="none"
                          stroke-width="2.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </symbol>
                      <defs>
                        <mask id="tick">
                          <use className="tick mask" href="#tick-path" />
                        </mask>
                      </defs>
                      <use
                        className="tick"
                        href="#tick-path"
                        stroke="currentColor"
                      />
                      <path
                        fill="white"
                        mask="url(#tick)"
                        d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"
                      />
                    </svg>
                    <svg className="lines" viewBox="0 0 11 11">
                      <path d="M5.88086 5.89441L9.53504 4.26746" />
                      <path d="M5.5274 8.78838L9.45391 9.55161" />
                      <path d="M3.49371 4.22065L5.55387 0.79198" />
                    </svg>
                  </label>
                </div>
                <div>Məni yadda saxla</div>
              </span>
              <span className="btnn-regisrt">
                <Link>Giriş</Link>
              </span>
            </form>
          </div>
          <div className="rightAcc">
            <h3>Qeydiyyat</h3>
            <p>
              Fərdi alış-veriş təcrübəsindən yararlanmaq üçün bu gün yeni hesab
              yaradın.
            </p>
            <div className="registrationpadd">
              <form>
                <input type="text" placeholder="İstifadəçi adı" />
                <input type="text" placeholder="E-poçt adresi" />
                <input type="password" placeholder="Şifrə" />
              </form>
            </div>
            <div className="register-paragraph">
              <p>
                Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək,
                hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir
                olunan digər məqsədlər üçün <span>istifadə olunacaq.</span>
              </p>
            </div>
            <span className="btnn-regisrt">
              <Link>Qeydiyyat</Link>
            </span>
            <div className="register-benefits">
              <h4>Qeydiyyatdan keçərək və aşağıdakıları edə biləcəksiniz:</h4>
              <p>
                Loke Alıcı Müdafiəsi sizi klikdən çatdırılmaya qədər əhatə edir.
                Abunə olun
              </p>
              <ul>
                <li>
                  <img src={tickBox} />
                  Yoxlama zamanı yolunuzu sürətləndirin
                </li>
                <li>
                  <img src={tickBox} />
                  Sifarişlərinizi asanlıqla izləyin
                </li>
                <li>
                  <img src={tickBox} />
                  Bütün satınalmalarınızı qeyd edin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Account);

import React, { useState } from 'react';
import './style.css';

function App() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [screen_name, set_screen_name] = useState("");
  const [day_of_birth, set_day_of_birth] = useState("");
  const [month_of_birth, set_month_of_birth] = useState("");
  const [year_of_birth, set_year_of_birth] = useState("");
  const [gender, set_gender] = useState("");
  const [country, set_country] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [password, set_password] = useState("");
  const [terms_agree, set_terms_agree] = useState(false);

  const check_terms = (e) => {
    return e.target.checked
      ? set_terms_agree(!terms_agree)
      : set_terms_agree(terms_agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      First Name : ${first_name}
      Last Name : ${last_name}
      Screen Name : ${screen_name}
      Date of birth : ${month_of_birth}-${day_of_birth}-${year_of_birth}
      gender : ${gender}
      country : ${country}
      email : ${email}
      phone : ${phone}
      password : ${password}
      terms agree : ${terms_agree}
      `
    );
  };
  return (
    <div className="App">
      <div className="">
        <div className="container">
        <div className="border border-5 border-dark">
          <div className="px-3 py-2 mt-1 mx-1 bg-secondary text-light rounded-top">Sign Up</div>
          <div >
            <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="bg-dark text-light mx-1 my-1">
            <div className="row mx-1 my-1 pb-2 pt-3">
              <label
                htmlFor="first_name"
                className="form-label text-end align-self-center col-4"
              >
                Fisrt Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  onChange={(e) => set_first_name(e.target.value)}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="last_name"
                className="form-label text-end align-self-center col-4"
              >
                Last Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  onChange={(e) => set_last_name(e.target.value)}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="screen_name"
                className="form-label text-end align-self-center col-4"
              >
                Screen Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="screen_name"
                  onChange={(e) => set_screen_name(e.target.value)}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor=""
                className="form-label text-end align-self-center col-4"
              >
                Date of Birth
              </label>
              <div className="col-8">
                <div className="d-flex justify-content-between">
                  <select
                    class="form-select"
                    onChange={(e) => set_month_of_birth(e.target.value)}
                  >
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                  <input
                    type="number"
                    className="form-control mx-3"
                    name="day_of_birth"
                    min="1"
                    max="31"
                    onChange={(e) => set_day_of_birth(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    name="year_of_birth"
                    min="1950"
                    max="2023"
                    onChange={(e) => set_year_of_birth(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor=""
                className="form-label text-end align-self-center col-4"
              >
                Gender
              </label>
              <div className="col-8">
                <span className="d-flex justify-content-start">
                  <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={(e) => set_gender(e.target.value)}
                    value="male"
                  />
                  <label class="form-check-label" for="gender">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={(e) => set_gender(e.target.value)}
                    value="female"
                  />
                  <label class="form-check-label" for="gender">
                    Female
                  </label>
                </div>
                </span>
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="country"
                className="form-label text-end align-self-center col-4"
              >
                Country
              </label>
              <div className="col-8">
                <select
                  class="form-select"
                  onChange={(e) => set_country(e.target.value)}
                >
                  <option value="usa">USA</option>
                  <option value="france">FRANCE</option>
                  <option value="spain">SPAIN</option>
                  <option value="italy">ITALY</option>
                  <option value="morroco">MORROCO</option>
                </select>
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="email"
                className="form-label text-end align-self-center col-4"
              >
                E-mail
              </label>
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={(e) => set_email(e.target.value)}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="phone"
                className="form-label text-end align-self-center col-4"
              >
                Phone
              </label>
              <div className="col-8">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  onChange={(e) => set_phone(e.target.value)}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="password"
                className="form-label text-end align-self-center col-4"
              >
                Password
              </label>
              <div className="col-8">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={(e) => document.getElementById("password").value === document.getElementById("confirm_password").value ? set_password(document.getElementById("password").value) : set_password("check password are not identicale !")}
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-2">
              <label
                htmlFor="confirm_password"
                className="form-label text-end align-self-center col-4"
              >
                Confirm Password
              </label>
              <div className="col-8">
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  id="confirm_password"
                />
              </div>
            </div>
            <div className="row mx-1 my-2 pb-4">
              <div className="col-4"></div>
              <div className="col-8">
                <div className="input-check">
                  <span className="d-flex justify-content-start">
                    <input
                      type="checkbox"
                      className="form-check-input "
                      name="terms_agree"
                      value={terms_agree}
                      onChange={(e) => check_terms(e)}
                    />
                    &nbsp;&nbsp;I agree to the Terms of Use
                  </span>
                </div>
              </div>
            </div>
            </div>
            <div className="row bg-secondary rounded-bottom mx-1 my-2">
              <div className="col-4"></div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  type="submit"
                  className="btn btn-success my-2 mx-2"
                  value="submit"
                />
                <input
                  type="reset"
                  className="btn btn-danger my-2 mx-2"
                  value="cancel"
                />
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
import { GuestLayout } from "../layouts/GuestLayout";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <GuestLayout>
      <div class="card p-4">
        <div class="card-body">
          <form method="post" action="{{ url('/login') }}">
            <h1>Login</h1>
            <p class="text-muted">Sign In to your account</p>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="icon-user"></i>
                </span>
              </div>
              <input
                type="username"
                class="form-control {{ $errors->has('username')?'is-invalid':'' }}"
                name="username"
                value="{{ old('username') }}"
                placeholder="NIM / Kode Dosen"
              />
              {/* @if ($errors->has('username')) */}
              <span class="invalid-feedback">
                <strong>NIM / Kode Dosen Anda Salah</strong>
              </span>
              {/* @endif */}
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="icon-lock"></i>
                </span>
              </div>
              <input
                type="password"
                class="form-control {{ $errors->has('password')?'is-invalid':'' }}"
                placeholder="Password"
                name="password"
              />
              {/* @if ($errors->has('password')) */}
              <span class="invalid-feedback">
                <strong>Password Anda Salah</strong>
              </span>
              {/* @endif */}
            </div>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-primary px-4" type="submit">
                  Login
                </button>
              </div>
              <div class="col-6 text-right">
                <NavLink
                  key="loginSSO"
                  to="/loginSSO"
                  className="btn btn-link px-0"
                >
                  Login via SSO Igracias
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="card text-white bg-primary py-5 d-md-down-none"
        style={{ width: "44%" }}
      >
        <div class="card-body text-center">
          <div>
            <h2>Sign up</h2>
            <p>belum memiliki akun ? silahkan menghubungi admin akademik FRI</p>
            Kontak LAAK FRI :{" "}
            <a
              class="btn btn-primary active mt-3"
              href="<?php echo 'http://wa.me/'.$no_laa ?>"
            >
              "(?php echo $no_laa)"
            </a>
            //{" "}
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;

import { MainLayout } from "../layouts/MainLayout";

const PeminatansShow = () => {
  return (
    <MainLayout>
      {/**/}
      <ol className="breadcrumb mb-0">
        <div className="col-12">
          <h3>PEMINATAN</h3>
          <hr className="mt-0" />
          <h6 className="mb-3">
            <a href="{!! route('peminatans.index') !!}" className="text-dark">
              PEMINATAN
            </a>{" "}
            / DETAIL PEMINATAN
          </h6>
        </div>
      </ol>
      <div className="container-fluid">
        <div className="animated fadeIn">
          {/*@include('coreui-templates::common.errors')*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>Details</strong>
                  <a
                    href="{{ route('peminatans.index') }}"
                    className="btn btn-light"
                  >
                    Back
                  </a>
                </div>
                <div className="card-body">
                  {/*@include('peminatans.show_fields')*/}
                  <div className="table-responsive-sm">
                    <table className="table table-striped table-borderless">
                      <tr>
                        <td
                          className="font-weight-bold"
                          style="white-space: nowrap;"
                        >
                          Nama
                        </td>
                        <td>:</td>
                        <td>{/*{{ $peminatan->nama }}*/}</td>
                      </tr>
                      <tr>
                        <td
                          className="font-weight-bold"
                          style="white-space: nowrap;"
                        >
                          Kelompok Keahlian
                        </td>
                        <td>:</td>
                        <td>{/*{{ $peminatan->kk }}*/}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PeminatansShow;

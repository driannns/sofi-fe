import { MainLayout } from "../layouts/MainLayout";

const Peminatans = () => {
  return (
    <MainLayout>
      <ol className="breadcrumb mb-0">
        <div className="col-12">
          <h3>PEMINATAN</h3>
          <hr className="mt-0" />
          <h6 className="mb-3">
            <a href="{!! route('home') !!}" className="text-dark">
              BERANDA
            </a>{" "}
            / PEMINATAN
          </h6>
        </div>
      </ol>
      <div className="container-fluid">
        <div className="animated fadeIn">
          {/*@include('flash::message')*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify"></i>
                  Peminatan
                  <a
                    className="pull-right"
                    href="{{ route('peminatans.create') }}"
                  >
                    <i className="fa fa-plus-square fa-lg"></i>
                  </a>
                </div>
                <div className="card-body">
                  {/*@include('peminatans.table')*/}
                  <div className="table-responsive-sm">
                    <table
                      className="table table-striped datatable"
                      id="peminatans-table"
                    >
                      <thead>
                        <tr>
                          <th>Nama</th>
                          <th>Kelompok Keahlian</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/*@foreach($peminatans as $peminatan)*/}
                        <tr>
                          <td>{/*{{ $peminatan->nama }}*/}</td>
                          <td>{/*{{ $peminatan->kk }}*/}</td>
                          <td>
                            {/*{!! Form::open(['route' => ['peminatans.destroy', $peminatan->id], 'method' => 'delete']) !!}*/}
                            <div className="btn-group">
                              <a
                                href="{{ route('peminatans.show', [$peminatan->id]) }}"
                                className="btn btn-ghost-success"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                              <a
                                href="{{ route('peminatans.edit', [$peminatan->id]) }}"
                                className="btn btn-ghost-info"
                              >
                                <i className="fa fa-edit"></i>
                              </a>
                              {/*{!! Form::button('<i className="fa fa-trash"></i>', ['type' => 'submit', 'className' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Are you sure?')"]) !!}*/}
                            </div>
                            {/*{!! Form::close() !!}*/}
                          </td>
                        </tr>
                        {/*@endforeach*/}
                      </tbody>
                    </table>
                  </div>
                  <div className="pull-right mr-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Peminatans;

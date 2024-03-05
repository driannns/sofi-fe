import { MainLayout } from "../layouts/MainLayout"

const PeminatansCreate = () => {
    return(
        <MainLayout>
        <ol className="breadcrumb mb-0">
        <div className="col-12">
            <h3>PEMINATAN</h3>
            <hr className="mt-0"/>
            <h6 className="mb-3"><a href="{!! route('peminatans.index') !!}" className="text-dark">PEMINATAN</a> / TAMBAH PEMINATAN</h6>
        </div>
    </ol>
     <div className="container-fluid">
          <div className="animated fadeIn">
               {/*@include('coreui-templates::common.errors')*/} 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            {/*{{-- */}<div className="card-header">
                                <i className="fa fa-plus-square-o fa-lg"></i>
                                <strong>Create Peminatan</strong>
                            </div> {/*--}}*/}
                            <div className="card-body">
                               {/*{!! Form::open(['route' => 'peminatans.store']) !!}*/} 

                                 {/* @include('peminatans.fields')*/} 
                                {/* <!-- Nama Field -->*/}
                                 <div className="form-group col-sm-6">
                                     {/*{!! Form::label('nama', 'Nama:') !!}*/}
                                    {/*{!! Form::text('nama', null, ['className' => 'form-control']) !!}*/} 
                                 </div>
                                 
                                 {/*<!-- Kk Field -->*/}
                                 <div className="form-group col-sm-6">
                                    {/*{!! Form::label('kk', 'Kk:') !!}*/} 
                                    {/*{!! Form::text('kk', null, ['className' => 'form-control']) !!}*/} 
                                 </div>
                                 
                                 {/*<!-- Submit Field -->*/}
                                 <div className="form-group col-sm-12">
                                   {/* {!! Form::submit('Save', ['className' => 'btn btn-primary']) !!}*/} 
                                    <a href="{{ route('peminatans.index') }}" className="btn btn-secondary">Cancel</a>
                                 </div>
                                {/*{!! Form::close() !!}*/}
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    </div>
        </MainLayout>
    )
}

export default PeminatansCreate
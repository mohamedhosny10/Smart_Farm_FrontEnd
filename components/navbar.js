function MainNavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
                <div class="container-fluid py-1 px-3 justify-content-end">
                    <div class="navbar mt-sm-0 mt-2 me-md-0 me-sm-4 row">
                        <div class="col-8">
                            <div class="input-group">
                                <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" placeholder="Type here..." />
                            </div>
                        </div>
                        <div class="col-4">
                            <a href="javascript:;" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-bell cursor-pointer"></i>
                                <span class="m-1">Alerts</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default MainNavBar;
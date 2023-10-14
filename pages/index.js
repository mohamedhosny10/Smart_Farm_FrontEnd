import MainNavBar from '../components/navbar'
import SideNavBar from '../components/sidebar'
import Card from '../components/dashboard/EachCard'


export default function Home() {
  return (
    <>
      <div class="h-25 bg-success position-absolute w-100"></div>
      <MainNavBar></MainNavBar>
      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <Card ></Card>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <Card ></Card>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <Card ></Card>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <Card ></Card>
          </div>
        </div>
      </div>

    </>

  )
}

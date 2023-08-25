
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table"
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
         <div className="top">
         <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQEA8NEBAQEBEODw8QEBYSFxANFhIXFhURGhcZHSgsGBslHhMVITIhMSsrLi46GCAzODMtOiktLi4BCgoKDg0OGhAPGi0dHSUtLS0tKy0tLS0tLSsrLSstNy4rKy0tLS0tKy0tLS0tLS0tLSstLS0tLS0tLSstKy0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYBBQcDBP/EAEUQAAIBAgMEBAkHCwQDAAAAAAABAgMRBBIhBQYxQRNRYXEHFCIkMnOBkbEjJVJys8HRFjNCU1Rig5OhwvBjgrLhkpSj/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEAAgMAAgMBAAAAAAAAAAAAARECAzEhIhITYUH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAABWt7d5PFnChSq0Y4ipaVpwqVXGDbSahDraespRircyYi0TNLKCkvas6ajOvjJQbUrNuEbqNszyqNrK6Tb0NlgNuVJRjOM6GJpyV4zjLLmXWpRupexIvOuVY2QsgNbS2zSfpqdJ/vx0788bpe1o2FOpGSUoyjJPg4u6ftRSYmOrRMTxIAEJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKVvJhIPEVaju5JU0rRcrLLHi0tOL4l1K9vA/Jrd0fhE019Uz45F4WYTeGi03kTwtKrbXLSk607tdTnl/8ABGt8DuOlTxlfCRnnoVKTrLjZVYSgs6T4XUmn12j1IuG9dCFRRg5wWehFVKc/Rq0Vr5VvRs3dS0t1mq2DsXD4Gm6uGcnOtm6Sv0sazjhaadSpTptRSV8nGzd7dRfLH2tSJ9adJpVYZYyjNS08rlZ/pJrk1r7j3VGKeaN4yfGUG4N97ja5xvdvwj4t4uEcUqTw2ImqahCkoPDuekGpLWau43zNvmdP2vttUctOLpOrK1lOTVlwvlWr1+/VFtc+KlXOPPhvqWNrQ/SVRdU0k/ZKP4M2+GrqpFSV+pp8YvmmU+jXrZU51acW9NYJRzW1SV7v3mz2fj50nLPTzxll/NSV7q95ZZW5W58iNmuP4nDOf6sQPio7WoS06RQfC1ROm2+pZrX9lz3rVGvRy97+5cznnx1vHnj2BqsXtqjRlGNWvRpuclCCqTjDPNq6jG7V3ztxPujietNEWmnuCCqJ8/foTJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVreJ/nu6PwiWUq28ktay7I/wDGJpr6pnxyzwq0X4pGSk4xlVwlKvJK+XD2q2v2OcL/AO1FY8HuJqU8RXoUrVqbozqxptuKlOypyt9HNCpKN+tR6jo+8WzXXpuFlKLupQlfLOm3dwduDuk1LjF97NLuzuxSwLnOFOpnmsrlOaqOML3yJxirK6XLkjTLGflbPHKKVnZ26NZ4inNpQw0J9K+lvGolHXosjXHRLMrx535Fx2snU2jhpKzUHLOr62tZO3Vdr/GQ2DQxflwxDlJqcssnJSvFr0uyN3dLS2uh715ec0nkUr1ms30F0cnf+iXtJxjwTPlqPCvUqqjSyzyQlKhhpSvZRhNVKk7tcFJ5L/URDwN7Zq5sTgpzdSFOmsRQu3JU0moygn9HyoO3f1m+3vwMa8VScoZalKl0lKTy51BNxmpWeWUcz14dd0azZGy6eyaE61BznKcJV69SUoyboUldUoWVoqUpJOWr1vpZFco9rTE+tOh4vExi45ZxqQqRTutVrwftPu2JDyYPRRytqKtpd34Lgcb3a3yxFXERp4lUVDEScYdFT6NUqq1jG19Yu1rvW9tTs2wo/I03+4U2T6wvhFZS4v4dsNN4+EpuSpvDyVF/o9LGtNzjq+OWdK76muo6h4Mdo162x8DOs255ZU3Kabc6cKkoQb7XGK1N3t/YeExiUMTTp1FfMozjGV3Hmk+azcVrr2lF3r8JdLZGIo4Klg1OlShDpMklT6Kk3aMYRSs3ZXtotUu7Jq6nR5onl6rru/A1+A2jCtGFSlJShVhGtCT0Tpyimn/VaHhtnbtHB03WxNWFOnH0ptWXG3DVvitFq7kDcxfJ+8kazZm1qWJpxrUZxq05XtOD5rRprk11H3qqu1f52EoegMJp8GmZJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUN535dX/AG/ZlvKXvRP5aqvqv/5r8TTX1TPjXxJ5U+KRBE0dbkRrWUXY1WFoXvPqnI2WKl5LPl2dJdBLrzz+JXJfBUfCrSfi9KWZwhVrYahXna+SgoSavbk5Rk+3Iiu7g4mo44zCRi69PoHNUr5VlnaFSEW+DeaEu+n2s6FvHst4im6dlKL0lCV8s4XvlduDT1jLld9bNXu7u1DBQqKjGcZ1VaU5TVRq18vBKyV3y77mU4zdtIyimh3f3TqqrSqTnBUqVTpo3UlUm07xi4NeTZ8dWtNL3udy3fXm9H1cTmO7mGrwpWrtuUXKzbb8nTm+PB+9HTt3X5tQ9XEy2RWMNMJvJ984K6copuN8srXavxs+V7K5yLwn7i4rFYuOIwkadTpIRpVYSll9GTy1E+xSaa4+Smr3duxkZRT5IyiWtKvsTZssPQoYeU7ujQp05SSflSS1a7L3K94bdnTq4GnOMZTjRrQrVYxTb6KMasZSsk+HSJ9iUnyLzON6su5fFn04lwVO815KcU9G7NySXDXi1ryEdHL/AADzqvDY1+X0DqU1Sf0qqi1UabWuipq51mhe1nfk9f8AOw5z4TN5a+zYUKWEy05VZT8pxUssYRi5WT0u88evg+xqw+DjeV7SwSrTUVWpzdCsocHUik1JLleM4u3K7J/Ufi0OKJ03y6vgYMw4+wCYAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAUTeip5zVXZD/hEvZzneyp57VXq/s4mmvqmfEkZuQuZudbkeGMl5LNbgK3kZf8AUl8JHrtrFqFOo7pNQbTauk7aNpcTTbAxCnCFpSlaespKzbtJN27ymUtMYW6J6JJ8UjzRK5dm+TaTSi7aFs3bfm2G9UvjEpm1J6MuG7D82w3qY/1a/BnPv5Do0dbswzJiRyuh8K/Oz7o/Fn2JPiupXR8a/OT+rH4s+6PBdxIqe/u6K2nRjC8qdSEs9OokpZZWa4X1TTaa05a6H3bgbrx2ZhPF1N1JynKtVqNZc9RpK9uStGKt2FhgTJRIZhx9hgzDiwJgAlAAAAAAAAAAAAAAAAAAAAAAAAAAABy/e+fzjUXqvsonUDlG+UvnSovVfZRNNfVM+NgCNw2dTmVzehtQq/vU217rfcajdJ6R+s1/Vlo2pSjOLUoqSs1r1PiV7ZVONOpGEVaKm7K9+JnMeWkT4Xe4bIhmjJXNv7VhCcIOpGKd3O6bvGzUbO1lqtXyt2nRd1X5rhvVRONb2PJiKbauoRi2utKpJtHYt035rhvVROXbLq1xTfkZskQrK8WuxmDVodnbXhXxeKp05RaoRhCas1KNbpKkZXTVstoxaabvd9RYI8F3HOdxp/Oe2fXQ+1rHRocF3IkSTPQ8ZSSTbaSSu2+S6zz2bj6WIpRrUZZ6c75ZWavlk4vR9qYH1GYcX3ETNPi+5EoegAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAcj30l87TXqfsonXDj2+0vnif8H7GJfX1TPjbXDZC5hs6nPT48dLRlcwcvl4r9/wC43+OejKzhJecx+v8AcUlaF8TDZC4ky6jT7Zw9OXlShByVmpOKurcNS87pPzfDeqiUfaktGXTc9/IYf1UfuObc6NSzGGSIyMWzTQwlKnWqyp0qUJVPKqShCMXOTk3eTS8p3b49ZuIcF3I1eKdqku5fE2lPgu5fAgeeModJSqU726SnOnfqzRav/Up3gjxk3hsThqilGphsQ04teipKzj7JwqF3JJk2JGafF9yMGafF9yEIl6AAsgAAAAAAAAAAAAAAAAAAAAAAAAAAA4zvxL56mvU/YxOzHFN+X8+T/g/YIvr6pnxubmJMhmMSkdLGnx46WjKvhJedw+v/AGlkx0tGVfCPzyH1/wC0pPUw6BcxJnnmMTloXRTWbUloy7bmv5DDeqj9xQ9py0ZeNy38jhvVR+45trbWtxGZkjMyatRjn8o+429L0V3L4Gl2i/lH3G6pejH6q+BAmACRJEqfF9yIInT4vuQgl6AAsqAAAAAAAAAAAAAAAAAAAAAAAAAAAcR37fz7P+D9gjtxxDf5tbcnorWou9v9Bcy+vqmfG0zCUjzuGzdm+PGvRlWwkvPYfX/tZZsXwZWMPZY2Gj9LjfT0XysQL5mMTloedxJ6EoavactGXjcmXyWG9Uih7TejL1uROPRYZWlfold5lb3WOfa21rmRqEiFQzaNHtaVqnsN5R9GP1V8DRbXt0mslHTqbv7je0PRj9VfAgTABIyidLi+5feeaPSjxfcvvEEvUAFlQAAAAAAAAAAAAAAAAAAAAAAAAAACi+EPZuEhfHYhV1CMI06lSjSdXo7XtOSWqWtr8NNbF6MNXJialExbi2AxtOtFSpzhUXNxfPrtxXtPpafUzplTdrZ8pZpYHBOX0nh6d/fYl+TuB/Y8J/Ih+Bp9inwclxMX1M+PD0cHFzqYms6DTThUcJSi7q1nlTt/2dle7mA/YsH/ACIfgRe7Oz/2HBf+vT/AfYfBy7CYqFWKlCUJrrhLMr957tPqZ0n8l9nXv4jgr9fi8PwJ/k3gP2PCfyYfgPsg+DkG0KbaejLT4PsXSdJRlNRrUG04S0z0m7xkuzXL2W7UXR7s7P8A2LCfyYfgYW6+zk0/EcFdap+L07p99imUxktjFPspzUldO6E43FPZmHirRo0orqUUifiNL9XD3GdL20208GpTTk7Rs9epmywlROKSabjpp1cj2eBo/q4e4hDZWHTuqFFN8WoJCi07CxnxGl+rh7h4lS/Vw9xNFsE6HN8tF7dbmPE6X0I+49oxSVkrJcEhRbIAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z" 
                alt="" className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">iphone</h1>
                <div className="detailItem">
                  <span className="itemKey">EMAIL:</span>
                  <span className="itemValue">Iphone@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">phone:</span>
                  <span className="itemValue">+91 7001909836</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">KOLKATA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
              </div>
            </div>
         </div>
         <div className="right">

         <Chart aspect={3/ 1} title="user Spending(last 6 months"/>
         </div>
         
         </div>
         <div className="bottom">
         <h1 className="title">Last Transaction</h1>
          <List/>
         </div>
      </div>
      
    </div>
  )
}

export default Single

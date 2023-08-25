import "./user.css";
import {Link} from "react-router-dom";
import{PermIdentity,CalendarToday,MailOutline,LocationSearching,Publish,PhoneAndroid, } from "@material-ui/icons";
const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to ="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="data:image/png;base64,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"
                     alt="" className="userShowImg"/>
                     <div className="userShowTopTitle">
                        <span className="userShowUserName">Tanmay Karmakar</span>
                        <span className="userShowUserTitle">Software Developer Engineer</span>
                     </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Tanmay980</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">16/08/1998</span>
                    </div>
                    <span className="userShowTitle">Contact  Details</span>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">tanmaykarmakar980@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Westbengal</span>
                    </div>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+91 7001909836</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder="tanmay980" 
                                className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Fullname</label>
                            <input 
                                type="text" 
                                placeholder="Tanmay Karmakar" 
                                className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="karmakrtanmay980@gmail.com" 
                                className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input 
                                type="text" 
                                placeholder="+91 7001909836" 
                                className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder="WestBengal" 
                                className="userUpdateInput"/></div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABLFBMVEX////mOx/W4+v0qYEdGDjjjGHOdU37roQAADPmOBoAFTkAADDZ5u74rIMAFjnmNRTlKgDxPRwWFDcAAC3+9fTkHgAAEzr98O/kh1i7y9P3y8gUFzjfm3mueWb519ThOiA9LD+jcmLCh27MZTXh2tv0s63sd2/qbGTpX1LpXEroVED64d7yqqT1vLfONiTFNCW2MSgyGjfnSTM/HDZgQ0qSZVtQHzQMDTXxnpXth399V1TnflbetKPI19/bx7/o7/PvkoiEJy95JTCYLC1sIzKqLypTO0ZtTU4qIDtbIDSaZVJJMD/cWTuCT0TQjGwzLUZTSVqubFRCPFGRjZTappCvq69RVGf/vZkAACT4wqe/dFXrrI7mbUl0R0TumnmcTkHeUi3csbLfj47coqG6TIEIAAAJKklEQVR4nO2a+1vaSBfHgWRIYhITgiAIyGURBe9UTBVvra3QUum26767Veuq+///D++ZJFwqmTMB0f2F7/O0BUpmPpw5cy6ThEIzzTTTTDPN9BJaWFhYXIS//pO5F5dXziqra9UaqLq2WjlbWV58RZL1jYN6ImGahmEorgzDNBOJ+sHG+itMv7B0YCZMQwn7SDHgv86WXhZg/axumr7T9zFMs372crZYWuXM36dYXX4RgM1awuDP78pI1DanDrBUNwMDOBBmfbpOsV4ZD8CFqEzRJzYMc1wAKlNZmRLA+lpiEgCqxOriNAg2w2OvwUBGfgpu+dZ3HypKOJ/fAuXzYSWmsLeqYr59LkHFbxGU2Pa7T+JcEjQn7r8/39kKx2IA4kuSOHgWwELNzw9jO7vJ+YzoKZOZB5i5Nx/OP27nYz4UZu0Z+Wux7ucGsXeD+QfKzM/PZXb3P+ZHIYz6xAwMgvO5UYA+SHJ/KzbKMKkdFmp+BMp2kk3gWGN71A4TroU/QTj/xmcVfmGYy49eZdYmQVj1jYjoMria++Dnk5XxCd4yQuIuxwiUYcvnusTGuASb/gTKR64RRHH+/ahHAsOYmXM97B/wYjxPcLxh35e+Pl6+qPrnBWWLtR0s27b6b3Z9HBK25to4BCuM5Bx731sHS6VyprVsVZUvDlui2kfwcwZYijFS1jrDFZWtHoFcKGaFbvGwI9rtTqvRlahKloVZARiCL0WFkZ6VDy6CJRcFSRd0+EPV+1fKth2GzBsGghE4Yy2xaqStXZfAKkmCn6SSzHZHKjNoZe0fFsEIO64RZAYB2GOPmiHziVU/BPXITZYRIEU6BA0WAZhBdRD84oJrhmAeWWf9htgnJyjYLABqBgtHMALliiVmsRrbpwgq2whghpaN+QJsiiDesMqsVl2EeElHEHIysimpGQKkK1ZMoAgfMpx1EHTHGeZ22PVsgt/fnLG7FtcdLcQIgpC1mXnKFb+iXqghBTlNk5ZIXcGJhsMsuveJBF/A/DGsVHkFFNsZQduwEFZBgjBYbO21GiWp55iS1KWfFLOSdKjSooWNwA9PB1j3SIs260LSi2qcJim5nfMidK7gZK047BYaIOfPMYQzDoJPDT5Q7L1s2YdSbq+Yy+UarYJ96CWHhl1oNeDDxl5OKFiijLgj1A04wTLaQivbnztyUXI9AZTteYOe1b2PBKkoi5+/YG2oie+JDRTBaJJLuUvn1bulkvCLOwrdUtd1DXGPEHZgAAS85WelaU8p8lmGn653L77a6u/DMar0u2V/3XPwrEtC7pGV4KRs1BXCeUK+qSVdz34vf7fif5Sv+ja4Sf8Zt9TT/3XhP+OfCfkysTMs4IcZgHBN86T+V+h7/O8/Qj/6Rvgr9OffajL0A3whF/9GyC32UxIYwjIfwS44K36TKw4AqH7kcjdO0GrJ1zwELDKwytYeQopci3bWi4ZPQnMvWnYoArYQeBmLJAhHFEHOYUlC79oUAXNHPE0c4BsCNiVp23tIvQBRSpUJIXV0GGxLsGsFR8otIFgqQgBpSlQJHhfQmmFhjXO4dk9IwaLxkbkOUC+AFVLoOMYqglDlnXIT0rGsAmKEC1tMcjYE1NHsfL2IFAuumgTK9OES+lfXlHKQqtscV0BLBi6CUic/oSyy+/lJiBJdIKTPAGnS6pAmPoyCHPvwraDcXiZ7nYRXOOnCnfPS8wTR2muizvhMK0DJQIs3uwVBWsgVi7lSN3dYLJXoyywE5watV94h9QoXge+O7oEblC2CIMuyGo+ryUJGjsfj8Kak01pBnPvIGwRzR+6mBG1BFQ3bEhzPajey3Wj0jkS73eJXSz2UnIWYx0omFwHZlLzQRJXfpX2tLh3aduku+punVNeidW2WdhH+5xvDCFg7w6lYqBRoLG0oTS7AJ1e007IjrXyXU9tQv8F22eUOgQZoXpoKu/0MdceC2tVTzSOH4OSuKWQtKwsJAu0hPKFpipOsHSvQE694pyXGYVOkbptUt807QWhbex07iDfiyZpTsrhmoEdeli3GaSQgDgINTVLbokdN85/4I6AlC6dw8xjcE6e4GyL7jV3bOfVE+voBAkLAK189Kc45tJcwi42iQ1Ki/azv8fPI5fgxB6dm6Q2yk6Ftfpf+/rZsZaGMo4dtmfnzIL+AU8TjrUxfsfx+UoRglKWHS7A7sw3wg+Suz90QH3FamfWg90Rj/4BH2tDd0iWBfla0kpeMc+unMjiHHIGcAZRvRn8OnTpb8sV1lJMgPfHaWry5H0aIRqPfOknLOwMvfIP3wRC4zT16xPEEgULIScuWC/847/BaqY/AO+LADnpGEaLR68ufl9fe6/sgFypVDkGgNEFVj44qEEKAG8jIod/wb/lCRhHQLq6nAId+QRI2bCxoalJPEfDS3bswyJ26QA6pEKqnDAEQAh0Ah3xvEz/RPSE+EPyVMPjOSMW8GTA0UpOQUQhe/wAyA94pZNyeG0gZEAwg6Msm8jCFgx70Jh3zxpA7v3GfIkzdow9fBb4xhG0Kw8zfsgFgm/xbZT9/ZAZ/oGORdZPQSFQfIogNAEHTHtYSDFOMcZMwtOLDAPPXz8ppTbvBCK60SForP9b8KMa5VRoKPW2rDNOsHZxENO34WDtBzJA60SLH8LXIyUHVfLIiJtZEjWp9qG6A6Y3aI50/AgIz3LERspqWpt9yKB6r9NLeQOPeNndjJH2GMmGsPj7AiM78MDRqhlRZO05733QwHh4rRsJ9RHPchwegikwoZr7y+FDW+tO7AjMcMRhSRz0jDChg7R42KnUzMcHzbpXw48j0VGCGyJUvQ+oqMmyEYYzyv5M8YLVYHhnMMwMMeuPDkLrR6Hbwv0ibgADEGg1sDWvxBCJFN0Mk7X/JpARMBjqRVr4ZhkilrsovQRAKMUaMpI/p+l7RqakIuaJuc8wiiExOgKwF7IuIFimfHB0dnZyUHZdLT9kPejpljBpJp515XXnv/b97+jwCJgNdjfTxsUMD+xRes772bAKEQXOmpgIUludOgyDE3hiR/lKwvzAVgBC2GBxNxwTPgJgmABXb2AxNbQ0GOh0L4gUAXIr/agl+gQhgCu0lARwI3BTa6UsD9DB8jfFa0w9zDOm1Z59ppplmmmmm19H/AYJHG9jXt7xtAAAAAElFTkSuQmCC"
                                alt="" 
                                className="userUpdateImg" 
                            />
                            <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                            <input type="file" id="file" style={{display:"none"}} />   
                        </div>
                            <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default User

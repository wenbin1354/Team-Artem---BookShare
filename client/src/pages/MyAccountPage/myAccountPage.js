import React from "react"
import SideBar from "../../components/SideBar/sideBar"
import BookInfoCardList from "../../components/BookInfoCardList/bookInfoCardList"
import NewNav from "../../components/NewNav";

let currentTab = "booksBorrowed";
const books = [
  {
    id: 0,
    title: "Test Title1",
    author: "John Doe1",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe1",
  },

  {
    id: 1,
    title: "Test Title2",
    author: "John Doe2",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe2",
  },

  {
    id: 2,
    title: "Test Title3",
    author: "John Doe3",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe3"
  }

]
export default function MyAccountPage(){
    const requestsPage = 
    <div>
        <NewNav />
        <SideBar nav="myAccount"/>
        <BookInfoCardList bookList={books} tab={currentTab} />
    </div>

    return requestsPage;
}
import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold" >ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>


        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold" >COMMUNITY</h5>
          <p>Accebility</p>
          <p>This is not a real site</p>
          <p>It's a Aswome clone</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold" >HOST</h5>
          <p>Airbnb React</p>
          <p>Presents</p>
          <p>Hello</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold" >SUPPORT</h5>
          <p>Help center</p>
          <p>Trust & Safty</p>
          <p>About me</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        
    </div>
  )
}

export default Footer

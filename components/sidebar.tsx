"use client";
import { useState } from "react"

export function Sidebar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  return (
    <aside className="p-4 h-full space-y-4">
      <div className="hidden sm:block">
        <SidebarLinks />
      </div>

      <div className="sm:hidden w-full space-y-6">
        <div className="flex items-center justify-center">
          <button className="h-[45px] border w-[250px] text-[#00acee] font-bold flex items-center justify-center" onClick={() => setShowMobileMenu((prev) => !prev)}>Menu</button>
        </div>
        {showMobileMenu && <SidebarLinks />}
      </div>

      <div className="hidden sm:block">
        <h5 className="text-xs font-semibold">Sponsors (<a href="https://opencollective.com/bower" className="text-[#008ec4]">become one</a>):</h5>
        <a rel="sponsored" href="https://www.instinctools.com/cloud-computing/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/c56Di42.png" alt="*instinctools" /></a>
        <a rel="sponsored" href="https://420couponcodes.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/IbhCD2k.png" alt="420couponcodes.com" /></a>
        <a rel="sponsored" href="https://www.credimaxx.de/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/sf5e7KT.png" alt="credimaxx.de" /></a>
        <a rel="sponsored" href="https://www.ramotion.com/agency/web-design/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/mQxmvRm.png" alt="Ramotion" /></a>
        <a rel="sponsored" href="https://www.softwaredevelopment.co.uk/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/HoU15ep.png" alt="SoftwareDevelopmentUK" /></a>
        <a rel="sponsored" href="https://theymakedesign.com/best-web-design-companies-3ecc85b32071"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/kfA0vQE.png" alt="theymakedesign.com" /></a>
        <a rel="sponsored" href="https://www.top5credits.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/K2EU3HD.png" alt="top5credits.com" /></a>
        <a rel="sponsored" href="https://www.cryptonewsz.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/sYNDuyj.png" alt="CryptoNewsZ" /></a>
        <a rel="sponsored" href="https://legalbet.uk/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/2qQ6Gxf.png" alt="Legalbet" /></a>
        <a rel="sponsored" href="https://route4me.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/g5LeC9Q.png" alt="Route4Me Route Planner" /></a>
        <a rel="sponsored" href="https://www.synetec.co.uk/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/FatvhBy.png" alt="Synetec" /></a>
        <a rel="sponsored" href="https://fitclubfinder.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/wEp91FC.png" alt="FitclubFinder" /></a>
        <a rel="sponsored" href="https://sprocketdigital.co.nz/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/koJsb0d.png" alt="Matthew Chalk" /></a>
        <a rel="sponsored" href="https://vpn-review.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/INf1G7H.png" alt="VPN reviews 2019" /></a>
        <a rel="sponsored" href="https://faveable.com/"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/PMqdGyT.png" alt="Faveable" /></a>
        <a rel="sponsored" href="https://iboysoft.com"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/eOWcxUr.png" alt="iBoysoft" /></a>
        <a rel="sponsored" href="https://webpundits.in"><img className="my-5 max-h-[100px] max-w-[200px]" src="https://i.imgur.com/IVgnquz.png" alt="Buy RDP online from Web Pundits" /></a>
      </div>
    </aside>
  )
}

function SidebarLinks() {
  return <ul className="space-y-2 text-center sm:text-left">
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Home</a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Creating Packages</a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Api</a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Configuration</a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Pluggable Resolvers</a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">Tools </a></li>
    <li className="p-2 sm:p-0 border-b border-b-gray-200 sm:border-0"><a href="#" className="text-[#00acee] font-bold text-[17px]">About</a></li>
  </ul>
}
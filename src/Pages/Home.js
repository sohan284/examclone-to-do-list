import React from 'react';
import add from './../Images/Add logo.svg'
import poligon from './../Images/Polygon 46.svg'
import poligon2 from './../Images/poligon 90.svg'
import group from './../Images/Group 4.svg'
import group2 from './../Images/Group 9.svg'

const Home = () => {
    return (
        <div className='flex'>
            <div className='ml-[62px] mt-[61px]'>
                <h1 className='date '>12<span className='th'>th</span></h1>
                <h5 className='month'>Jan,2021</h5>
            </div>
            <div className='toDoBox rounded-md mt-[58px] ml-[247px] w-[568px] h-[652px] bg-[white]'>
                <h2 className='font-bold pt-[21px] ml-[25px]'>My <span className='text-[#E33E5A]'>To</span>-do List</h2>

                <div>
                    <div class="relative mt-[20px] ml-6">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="border  rounded-xl p-2 pl-10 w-72 text-sm" placeholder="search tasks here..." required />
                       
                    </div>
                    <div className='mt-[20px] ml-[28px] flex'>
                        <img src={add} alt="" />
                        <input type="text" placeholder='  Add new task' />
                        
                    </div>
                    <div className='mt-[11px] ml-[28px] flex'>
                        <img src={poligon} alt="" />
                        <h1 className='font-semibold ml-[11px]'>Lorem upsum</h1>
                        
                    </div>
                    <div className='mt-[11px] ml-[71px] flex'>
                        <img src={add} alt="" />
                        <input type="text" placeholder='  Add new task' />
                    </div>
                    <div className='mt-[11px] ml-[54px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#a8a8a8]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group} alt="" />
                    </div>
                    <div className='mt-[11px] ml-[54px] flex'>
                        <img src={poligon} alt="" />
                        <h1 className='font-semibold ml-[11px]'>Read an article</h1>
                        
                    </div>
                    <div className='mt-[11px] ml-[100px] flex'>
                        <img src={add} alt="" />
                        <input type="text" placeholder='  Add new task' />
                    </div>
                    <div className='mt-[11px] ml-[98px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#575757]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group2} alt="" />
                    </div>
                    <div className='mt-[11px] ml-[98px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#575757]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group2} alt="" />
                    </div>
                    <div className='mt-[11px] ml-[98px] flex'>
                        <img className='poligon' src={poligon} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#242424]'>Lorem upsum</h1>
                       </div>
                    <div className='mt-[11px] ml-[130px] flex'>
                        <img src={add} alt="" />
                        <input type="text" placeholder='  Add new task' />
                    </div>
                    <div className='mt-[11px] ml-[120px] flex'>
                        <img className='poligon' src={poligon} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#242424]'>Lorem upsum</h1>
                     </div>
                     <div className='mt-[11px] ml-[160px] flex'>
                        <img src={add} alt="" />
                        <input type="text" placeholder='  Add new task' />
                    </div>
                    <div className='mt-[11px] ml-[154px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#a8a8a8]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group} alt="" />
                    </div>
                    <div className='mt-[11px] ml-[154px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#272727]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group2} alt="" />
                    </div>
                    <div className='mt-[11px] ml-[154px] flex'>
                        <img className='poligon' src={poligon2} alt="" />
                        <h1 className='font-semibold ml-[11px] text-[#a8a8a8]'>Lorem upsum</h1>
                        <img className='ml-[180px]' src={group} alt="" />
                    </div>
                </div>


            </div>
            <div className='mt-[58px] ml-[84px]'>
                <h1 className='text-center font-bold'>Status</h1>
                <h2 className='py-2'>Total Tasks:  <span className='font-bold text-[red] ml-[120px]'>12</span></h2>
                <h2 className='py-2'>Completed Tasks: <span className='font-bold text-[red] ml-[85px]'>5</span> </h2>
                <h2 className='py-2'>Pending Tasks:<span className='font-bold text-[red] ml-[110px]'>7</span> </h2>
            </div>
        </div>
    );
};

export default Home;
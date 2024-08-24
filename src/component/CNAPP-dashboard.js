import React,{useState} from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IconContext } from 'react-icons';


const CNAPPdashboard = () => {
   const [first, setfirst] = useState(false)


  const [dashboardData, setDashboardData] = useState({
    categories: [
      {
        id: '1',
        name: 'CSPM Executive Dashboard',
        widgets: [
          { id: 'w1', name: 'Widget 1', text: 'Random text for widget 1' },
          { id: 'w2', name: 'Widget 2', text: 'Random text for widget 2' }
        ]
      },
      {
        id: '2',
        name: 'CWPP Executive Dashboard',
        widgets: [
          { id: 'w9', name: 'Widget 9', text: 'Random text for widget 1' },
          { id: 'w3', name: 'Widget 3', text: 'Random text for widget 2' },
          { id: 'w4', name: 'Widget 4', text: 'Random text for widget 2' },
          { id: 'w6', name: 'Widget 6', text: 'Random text for widget 2' }
        ]
      },
      {
        id: '3',
        name: 'IMDG Executive Dashboard',
        widgets: [
          { id: 'w1', name: 'Widget 1', text: 'Random text for widget 1' },
          { id: 'w2', name: 'Widget 2', text: 'Random text for widget 2' },
          { id: 'w7', name: 'Widget 3', text: 'Random text for widget 2' },
          { id: 'w8', name: 'Widget 4', text: 'Random text for widget 2' }
        ]
      }
    ]
  });

  // Other states to manage input data
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('1'); // Default to the first category

  // Implementing functionalities (add, remove, search) will follow in later steps
//add widget
const addWidget = () => {
  if (!newWidgetName || !newWidgetText) return;

  setDashboardData(prevData => ({
    ...prevData,
    categories: prevData.categories.map(category =>
      category.id === selectedCategoryId
        ? {
            ...category,
            widgets: [
              ...category.widgets,
              { id: `w${Date.now()}`, name: newWidgetName, text: newWidgetText }
            ]
          }
        : category
    )
  }));

  // Reset the input fields
  setNewWidgetName('');
  setNewWidgetText('');
};

//remove widget

const removeWidget = (categoryId, widgetId) => {
  setDashboardData(prevData => ({
    ...prevData,
    categories: prevData.categories.map(category =>
      category.id === categoryId
        ? {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId)
          }
        : category
    )
  }));
};

//search result

const [searchTerm, setSearchTerm] = useState('');

const searchWidgets = searchTerm => {
  const lowercasedTerm = searchTerm.toLowerCase();
  return dashboardData.categories.flatMap(category =>
    category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(lowercasedTerm)
    )
  );
};



  return (
    <>
     <div className='fixed flex items-center justify-between  w-full  mb-4 pb-2 hover:border-b-2 bg-white'>
        <div className='flex p-2 '>

            <p className='mr-2 text-sm'>Home</p>
            <IconContext.Provider value={{ className: 'react-icons' }}><IoIosArrowForward /> </IconContext.Provider>

            <p className='text-sm font-bold'>Dashboard V2</p>
        </div>

        <div className='flex flex-wrap justify-around space-x-4 mr-3'>

          <div className=' relative flex  ml-1'>
        
          <div className='absolute left-2 inset-y-0 flex items-center'>
                 <IconContext.Provider value={{  style: { fontSize: '25px',}, className: " -ml-1 mr-3   text-gray-400 hover:text-gray-500" }}>
         
                  <IoIosSearch />
         
                 </IconContext.Provider>
            </div>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className=' bg-slate-200 appearance-none w-32 mr-2 border-2 pl-8 border-gray-300 hover:border-gray-400 transition-colors rounded-md  text-gray-800 leading-tight focus:outline-none focus:ring-gray-800 focus:border-gray-800 focus:shadow-outline' placeholder='Search anything what you want if it exist it will show to result'/> 
            
        </div>
        <div id='dropdowndefault' className='   lg:hidden'>
          <button id='dropdowndef'   type='button' className='inline-flex font-bold'>menu</button>
          
        </div>
        <div>
          <IconContext.Provider value={{style:{fontSize:'20px'}, className: 'react-icons max-lg:hidden'}} ><MdOutlineNotificationsActive /></IconContext.Provider>
        
        </div>

        <div></div>

        </div>
 
        
    </div>





    <div className='flex justify-between p-6 pt-20 mr-4 ml-4 mt-18'>

      <div className=''>
        <h4 className='font-bold'>CNAPP Dashboard</h4>
       </div>

      <div className='flex flex-row justify-between gap-4  selection:text-red-500'>
          <div className='border-2 rounded-md flex font-sans hover:border-slate-900'>
             <button className='border-3 ' onClick={() => setfirst(true)}>Add widget</button>
             <IconContext.Provider value={{style:{fontSize:'20px', marginTop:'3px'}}}><BsPlusLg /></IconContext.Provider>

             </div>
             <div className='border-2 pl-2 pr-2 rounded-md hover:border-gray-900'>
                <span><IconContext.Provider value={{style:{fontSize:'20px'}, className: 'react-iconss '}} ><BsThreeDotsVertical /></IconContext.Provider></span>
             </div>
             <div className='border-2 p-1 rounded-md flex hover:border-slate-950'>
                <div className='border-r-2 pr-1 mr-1 hover:border-slate-900'>
                    <span><IconContext.Provider value={{style:{fontSize:'20px'}, className: 'react-icons'}}><MdAccessTimeFilled /></IconContext.Provider></span>
                    
                </div>
                <div className='flex flex-row font-mono font-bold text-ellipsis'>
                    <p>Last 2days </p>
                    <span><IconContext.Provider value={{style:{fontSize:'20px',marginTop:'3px'}}}><IoIosArrowDown /></IconContext.Provider></span>
                </div>
             </div>

        </div>
    </div>


    {/* add widget with buttun  */}

    {first && (
       <div className='flex flex-col text-center'>
       <h4 className='font-bold text-center'>Add New Widget</h4>
       <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
         {dashboardData.categories.map(category => (
           <option key={category.id} value={category.id}>
             {category.name}
           </option>
         ))}
       </select>
       <input className='w-full text-center border-2 rounded-2xl hover:border-gray-900'
         type="text"
         placeholder="Widget Name"
         value={newWidgetName}
         onChange={e => setNewWidgetName(e.target.value)}
       />
       <input className='w-full text-center border-2 rounded-2xl hover:border-gray-900'
         type="text"
         placeholder="Widget Text"
         value={newWidgetText}
         onChange={e => setNewWidgetText(e.target.value)}
       />
       <div onClick={()=>setfirst(false)}>
         <button onClick={addWidget}>+ Add Widget</button>
       </div>
      
     </div>
    )}


    {/* Search Results */}
    {searchTerm && (
      <div>
        <h4>Search Results:</h4>
        {searchWidgets(searchTerm).map(widget => (
          <div key={widget.id} style={{ border: '1px solid #000', padding: '10px', margin: '5px' }}>
            <h4>{widget.name}</h4>
            <p>{widget.text}</p>
              
          </div>
        ))}
      </div>
    )}


    {/* next widget */}

    
    <div className='m-8 mt-14'>
    {dashboardData.categories.map(category => (
      <div key={category.id}  className='flex flex-col'>
        <div>
            <h4 className='font-semibold'>{category.name}</h4>
        </div>
        
        <div className='m-4 flex flex-wrap'>
          {category.widgets.map(widget => (
            <div key={widget.id} className='  w-1/3 '>
              
          <div className='bg-white h-44 mt-4 border-2 rounded-2xl text-center'>
              <div className='font-medium text-center h-36 '>
                 <h5>{widget.name}</h5>
                 <p>{widget.text}</p>
                 
               </div>
               <button onClick={() => removeWidget(category.id, widget.id)}><IconContext.Provider value={{style:{fontSize:"10px"}, className:'flex flex-row-reverse'}}><ImCross /></IconContext.Provider></button>
              
              </div>
             </div>    
             
          ))}

          {/* add karna h */}

          <div className='h-44 bg-white m-4 w-1/3 border-2 rounded-2xl hover:border-gray-900'>

            <div className='flex flex-col text-center'>
      <h4 className='font-bold text-center'>Add New Widget</h4>
      <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
        {dashboardData.categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input className='w-full text-center border-2 rounded-2xl hover:border-gray-900'
        type="text"
        placeholder="Widget Name"
        value={newWidgetName}
        onChange={e => setNewWidgetName(e.target.value)}
      />
      <input className='w-full text-center border-2 rounded-2xl hover:border-gray-900'
        type="text"
        placeholder="Widget Text"
        value={newWidgetText}
        onChange={e => setNewWidgetText(e.target.value)}
      />
      <button onClick={addWidget}>+ Add Widget</button>
    </div>

          </div>

          

        </div>

        
      </div>
    ))}


    
    </div>

  
    
    </>
  )
}

export default CNAPPdashboard;
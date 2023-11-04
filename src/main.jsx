import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Chart from './components/Chart/Chart.jsx'
import ApplyNow from './components/ApplyNow.jsx'
import JobeDetiles from './components/JobeDetiles.jsx'
import ApplayAll from './components/ApplayAll.jsx'
import { productsloderdata } from './layout/getdata.js'
import ErroPage from './components/ErroPage.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErroPage></ErroPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:  () => fetch('jobeCatagroy.json'),
      },  
      {
        path: '/chart',
        element: <Chart></Chart>
      },
      {
        path: '/ApplayNow',
        element: <ApplyNow></ApplyNow>,
        loader: () => fetch('featuredjobs.json')
      },
      {
        path: '/applayall',  
        element: <ApplayAll></ApplayAll>,
        loader: productsloderdata
      },
      {
        path: '/jobedetiles/:id',
        element: <JobeDetiles></JobeDetiles>,
        loader: async({params}) => {
          const data = await fetch('featuredjobs.json')
          const jobsdata = await data.json()
          return jobsdata.find(job => job.id === params.id)  
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

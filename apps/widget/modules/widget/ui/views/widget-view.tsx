'use client'
import React from 'react'
import WidgetFooter from './components/widget-footer';
import WidgetHeader from './components/widget-header';

interface Props {
    organizationId: string;
}

const WidgetView = ({organizationId}:Props) => {
  return (
    <main className='min-h-screen min-w-screen flex flex-col h-full w-full overflow-hidden rounded-xl border bg-muted'>
        <WidgetHeader>
            <div className='flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold'>
                <p className='text-3xl'>Hi there!</p>
                <p className='text-xl'>How can we help you today?</p>
            </div>
        </WidgetHeader>
        <div className='flex flex-1'>

        widget view :{organizationId}
        </div>
        <WidgetFooter/>
    </main>
  )
}

export default WidgetView
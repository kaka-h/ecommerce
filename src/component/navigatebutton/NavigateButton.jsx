import { Button } from "@material-tailwind/react"

const NavigateButton = () => {
    const Buttons = ['Shoes', 'Hoodies', 'Dress', 'Swallow', 'Jeans']

    return (
        <div>
            <div className="flex items-center justify-center py-8">
                {Buttons.map ((data, index) => (
                        <div key={index} className='mr-4'>
                            <Button variant="outlined">{data}</Button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default NavigateButton

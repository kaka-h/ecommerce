import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../features/slice/authslice";
import { useDispatch } from "react-redux";

const Login = () => {
    const User = {
        name: "",
        password: "",
        image: "",
    }

    const [user, setUser] = useState(User);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                    Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" size="lg" type="text" name="name" value={user.name} onChange={onChange} />
                    <Input label="Password" size="lg" type="password" name="password" value={user.password} onChange={onChange} />
                    <Input label="Image URL Address" size="lg" type="text" name="image" value={user.image} onChange={onChange} />
                    <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={() => dispatch(login(user))} color="blue" variant="gradient" fullWidth>
                    Sign In
                    </Button>
                    <div className="flex justify-between">
                        <Typography className="text-xs mt-6 flex justify-center">
                            Name: Admin
                        </Typography>
                        <Typography className="text-xs mt-6 flex justify-center">
                            Password: Admin123#
                        </Typography>
                        <Typography className="text-xs mt-6 flex justify-center">
                            Image is optional
                        </Typography>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login

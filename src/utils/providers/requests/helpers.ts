import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export function GetData<T>(uri: string, dataKey: string): T | null {
    const [data, setData] = useState<{ [key: string]: T | null }>({});
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(uri);
                if (res.ok) {
                    const resj = await res.json();
                    setData((prevData) => ({
                        ...prevData,
                        [dataKey]: resj,
                    }));
                } else {
                    throw new Error("Hubo un error al obtener los datos");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [uri, dataKey, router.asPath]);

    return data[dataKey] || null;
}

export function UseActionData(
    uri: string,
    method: string,
    body: {}
): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
        try {
            let isMounted = true;
            const fetchData = async () => {
                try {
                    const res = await fetch(uri, {
                        method: method,
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body),
                    });
                    if (res.ok) {
                        const resj = await res.json();
                        swal({
                            title: "Sent!",
                            text: "Thank you for your request!",
                            icon: "success",
                        });
                        resolve(true);
                    } else {
                        swal({
                            title: "Error",
                            text: "There was an error sending your request. Please try again later.",
                            icon: "error",
                        });
                        throw new Error("Hubo un error al obtener los datos");
                    }
                } catch (error) {
                    console.error(error);
                    reject(error);
                }
            };

            fetchData();

            return () => {
                isMounted = false;
            };
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

import { useEffect, useState } from "react"
// import styles from "./Upload.module.scss"
import { useMutation } from "@tanstack/react-query";
import { IonImg } from "@ionic/react";

interface UploadProps {
    setFilename: (filename: string)=>void
    existingImg?: string | undefined
}

// Standard file upload, with img preview
export function StandardImageUpload() {
    const [image, setImage] = useState<File | undefined>();
    const [img1, setImg1] = useState<string>("");

    const uploadMutation = useMutation({
        mutationFn: async () => {
            if (!image) throw new Error("Missing a File")
            const form = new FormData()
            form.append("file", image)
            const res = await fetch(
                `${import.meta.env.VITE_API_SERVER}/profile/images`,
                {
                    method: "POST",
                    body: form,
                }
            );
            if (!res.ok) {
                throw new Error("File upload error");
            }
            return await res.json();
        },
        onSuccess: (data: any) => {
            // console.log(data);
            const objectUrl = data.objectUrl
            
            setImg1(objectUrl)
            console.log({ status: "successful", data })
        },
    });

    const onChangeImage = (_event: any) => {1
        setImage(_event.target.files![0])
        uploadMutation.mutate()
    }

    return (
        // <>
        //     <input className={styles.rectUpload} type="file" onChange={onChangeImage} />
        //     {img1 != "" && <IonImg className={styles.standardImgPreview} src={img1}/>}
        // </>

        <>
            <input type="file" onChange={onChangeImage} />
            {img1 != "" && <IonImg src={img1}/>}
        </>
    )
}

// Image upload in circle style, with img preview
export function CircleImageUpload({setFilename, existingImg}: UploadProps) {
    const [image, setImage] = useState<File | undefined>();
    const [img1, setImg1] = useState<string>("");

    useEffect(() => {
        if (existingImg) {
            setImg1(existingImg);
        }
    }, [existingImg]);

    const uploadMutation = useMutation({
        mutationFn: async () => {
            if (!image) throw new Error("Missing a File")
            const form = new FormData()
            form.append("file", image)
            const res = await fetch(
                `${import.meta.env.VITE_API_SERVER}/upload/images`,
                {
                    method: "POST",
                    body: form,
                }
            );
            if (!res.ok) {
                throw new Error("File upload error");
            }
            return await res.json();
        },
        onSuccess: (data: any) => {
            // console.log(data);
            const objectUrl = data.objectUrl
            setImg1(objectUrl)
            // console.log(objectUrl);
            
            const parts = objectUrl.split('/')
            setFilename(parts[parts.length - 1])
            console.log({ status: "successful", data })
        },
        onError: async (err: Error) => {
            console.log(`File upload error`)
        }
    });

    const onChangeImage = (_event: any) => {
        setImage(_event.target.files![0])
        uploadMutation.mutate()
    }

    const backgroundImageUrl: string = `${import.meta.env.VITE_API_SERVER}/icon/file.png`;

    return (
            <div>
                {
                    img1 === "" ?
                    <>
                    <label htmlFor="file">上傳圖像</label>
                    <input style={{ '--background-image-url': `url(${backgroundImageUrl})` } as any} type="file" name="file"  onChange={onChangeImage} />
                    </> 
                    : 
                    <>
                        <IonImg src={img1}/>
                        <label htmlFor="file">上傳另一圖像</label>
                        <input type="file" onChange={onChangeImage} />
                    </>
                }
            </div>
    )

}
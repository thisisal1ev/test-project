import Image from "next/image";

export default function ({ img, context, stylesForWrapper, stylesForContext }) {
  return (
    <div className={stylesForWrapper ? stylesForWrapper : "bg-bgWhite rounded-md p-8 space-y-6"
    }>
      <Image src={img} width={35} height={35} alt="icon" />
      <p className={stylesForContext ? stylesForContext : "text-base lg:text-xl leading-8 font-semibold"}>{context}</p>
    </div >
  )
}
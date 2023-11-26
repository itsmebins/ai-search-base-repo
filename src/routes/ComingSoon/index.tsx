
import { Button } from "components/UI";
import { useRouter } from "next/router";
import WaitingIcon from "components/Icons/Illustrations/Waiting"

interface Props {
    title?: string
    subTitle?: string
  }

const ComingSoon: React.FC<Props> = ({ title = "Coming Soon",  subTitle = ""}) => {
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col bg-neutral">
            <main className="container mx-auto flex flex-col items-center p-12 pt-14 flex-grow max-w-screen-xl">

                <div className="fgrid-c fgrid-s-xs-3">
                    <div className="fgrid-i fgrid-xs-12 fgrid-md-6 items-center">
                        <div>
                            {
                                title && (  <h1 className="text-3xl font-extrabold uppercase text-secondary">
                               {title  }
                                </h1>)
                            }
                            {
                                subTitle && ( <div className="mb-5 mt-3 text-2xl font-bold">
                                <p className="mb-3">{subTitle}</p>
                            </div>)
                            }
                      
                           

                            <div className="fgrid-c">
                                <div className="fgrid-i fgrid-xs-12 flex items-center justify-center md:justify-start">
                                    <div className="flex items-center max-w-[250px]">
                                        <Button color="primary" onClick={() => router.push("/")}>
                                            Go to Home
                                        </Button>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="fgrid-i fgrid-xs-12 fgrid-md-6 items-center">
                        <div className="h-full w-full flex items-center justify-center">
                            <div
                                className="h-full w-full text-primary"
                            >
                                <WaitingIcon width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ComingSoon;

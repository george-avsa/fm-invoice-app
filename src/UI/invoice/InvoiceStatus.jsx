import { HeadingS } from "../texts/Heading";

export function InvoiceStatus({status}) {

    return (
        <div className={`invoice-status invoice-status--${status}`}>
            <div className={`invoice-status__cirlce invoice-status__cirlce--${status}`} />
            <HeadingS additionClass={`invoice-status--${status}`} style={{background: "transparent"}}>{status[0].toUpperCase() + status.substring(1)}</HeadingS>
        </div>
    );
}
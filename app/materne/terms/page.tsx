"use client";
import { useIntl } from "react-intl";

const MaterneTermsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={"flex flex-col gap-8"}>
      <h1 className={"text-4xl font-bold"}>
        {formatMessage({ id: "cgu.title" })}
      </h1>

      {/*// I  */}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.one.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.one.body" })}</p>
      </div>

      {/*II*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.two.title" })}
        </p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "cgu.two.one.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.two.one.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "cgu.two.two.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.two.two.body" })}</p>
      </div>

      {/*III*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.three.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.three.body" })}</p>
      </div>

      {/*IV*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.four.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.four.body" })}</p>
      </div>

      {/*V*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.five.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.five.body" })}</p>
      </div>

      {/*VI*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.six.title" })}
        </p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "cgu.six.one.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.six.one.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "cgu.six.two.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.six.two.body" })}</p>
      </div>

      {/*VII*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.seven.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.seven.body" })}</p>
      </div>

      {/*VII*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "cgu.eight.title" })}
        </p>
        <p>{formatMessage({ id: "cgu.eight.body" })}</p>
      </div>
    </div>
  );
};

export default MaterneTermsPage;

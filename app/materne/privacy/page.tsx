"use client";

import { useIntl } from "react-intl";

const MaternePrivacyPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={"flex flex-col gap-8"}>
      <h1 className={"text-4xl font-bold"}>
        {formatMessage({ id: "pp.title" })}
      </h1>

      {/*// I  */}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.one.title" })}
        </p>
        <p>{formatMessage({ id: "pp.one.body" })}</p>
      </div>

      {/*II*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.two.title" })}
        </p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.two.one.title" })}
        </p>
        <p>{formatMessage({ id: "pp.two.one.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.two.two.title" })}
        </p>
        <p>{formatMessage({ id: "pp.two.two.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.two.three.title" })}
        </p>
        <p>{formatMessage({ id: "pp.two.three.body" })}</p>
      </div>

      {/*III*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.three.title" })}
        </p>
        <p>{formatMessage({ id: "pp.three.body" })}</p>
      </div>

      {/*IV*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.four.title" })}
        </p>
        <p>{formatMessage({ id: "pp.four.body" })}</p>
      </div>

      {/*V*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.five.title" })}
        </p>
        <p>{formatMessage({ id: "pp.five.body" })}</p>
      </div>

      {/*VI*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.six.title" })}
        </p>
        <p>{formatMessage({ id: "pp.six.body" })}</p>
      </div>

      {/*VII*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.seven.title" })}
        </p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.seven.one.title" })}
        </p>
        <p>{formatMessage({ id: "pp.seven.one.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.seven.two.title" })}
        </p>
        <p>{formatMessage({ id: "pp.seven.two.body" })}</p>
        <p className={"text-xl font-bold"}>
          {formatMessage({ id: "pp.seven.three.title" })}
        </p>
        <p>{formatMessage({ id: "pp.seven.three.body" })}</p>
      </div>

      {/*VIII*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.eight.title" })}
        </p>
        <p>{formatMessage({ id: "pp.eight.body" })}</p>
      </div>

      {/*IX*/}
      <div className={"gap-2 flex flex-col"}>
        <p className={"text-2xl font-bold"}>
          {formatMessage({ id: "pp.nine.title" })}
        </p>
        <p>{formatMessage({ id: "pp.nine.body" })}</p>
      </div>
    </div>
  );
};

export default MaternePrivacyPage;

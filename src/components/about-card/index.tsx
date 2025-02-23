import { Fragment } from 'react';
import { SanitizedAbout } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const AboutCard = ({
  about,
  loading,
}: {
  about: SanitizedAbout;
  loading: boolean;
}) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {about.title}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="card shadow-lg compact bg-base-100">
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col">
                        <div className="w-full px-4 text-center">
                          {loading ? (
                            <>
                              {skeleton({
                                widthCls: 'w-32',
                                heightCls: 'h-8',
                                className: 'mb-2 mx-auto',
                              })}
                              {skeleton({
                                widthCls: 'w-20',
                                heightCls: 'h-4',
                                className: 'mb-2 mx-auto',
                              })}
                              {skeleton({
                                widthCls: 'w-full',
                                heightCls: 'h-4',
                                className: 'mb-2 mx-auto',
                              })}
                            </>
                          ) : (
                            <>
                              {about?.content?.length &&
                                about.content.map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className="text-base-content text-opacity-60 text-base text-justify mb-3"
                                  >
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: paragraph,
                                      }}
                                    />
                                  </p>
                                ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCard;

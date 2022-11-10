import React from 'react';

const Blog = () => {
    return (
        <div>
                  <section className="">
      <div className="text-center text-5xl font-bold py-10">Blog</div>

        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              DIFFERENCE BETWEEN SQL AND NOSQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              WHAT IS JWT, AND HOW DOES IT WORK?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              WHAT IS THE DIFFERENCE BETWEEN JAVASCRIPT AND NODE JS?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              HOW DOES NODE HANDLE MULTIPLE REQUESTS AT THE SAME TIME?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
              </p>
            </details>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Blog;
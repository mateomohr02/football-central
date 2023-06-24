import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from "react-router-dom";

const CustomBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
  .split("/")
  .filter((path) => path !== "")
  .map((path) => path.charAt(0).toUpperCase() + path.slice(1));

  
  return (
    <Breadcrumb
      separator={<ChevronRightIcon color="white" />}
      spacing="8px"
      fontSize="sm"
      mt="4"
      ml="4"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/" color="white">
          Inicio
        </BreadcrumbLink>
      </BreadcrumbItem>

      {pathnames.map((pathname, index) => {
        const route = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <BreadcrumbItem key={route} isCurrentPage={isLast}>
            {isLast ? (
              <BreadcrumbLink color="white">{pathname}</BreadcrumbLink>
            ) : (
              <BreadcrumbLink href={route} color="white">
                {pathname}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
